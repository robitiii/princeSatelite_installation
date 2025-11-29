import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Send } from "lucide-react";

const formatToIsoWithOffset = (date: Date, offsetMinutes: number) => {
  const pad = (n: number) => n.toString().padStart(2, "0");

  // Convert to the target offset by shifting from UTC
  const shifted = new Date(date.getTime() + offsetMinutes * 60_000);

  const year = shifted.getUTCFullYear();
  const month = pad(shifted.getUTCMonth() + 1);
  const day = pad(shifted.getUTCDate());
  const hours = pad(shifted.getUTCHours());
  const minutes = pad(shifted.getUTCMinutes());
  const seconds = pad(shifted.getUTCSeconds());

  const sign = offsetMinutes >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMinutes);
  const offsetHours = pad(Math.floor(abs / 60));
  const offsetMins = pad(abs % 60);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${sign}${offsetHours}:${offsetMins}`;
};

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  houseAddress: z.string().min(5, "Please enter your house address"),
  complex: z.string().optional(),
  city: z.string().min(2, "Please enter your city"),
  postalCode: z.string().min(3, "Please enter your postal code"),
  propertyType: z.enum(["home", "business", "complex"]),
  serviceType: z.string().min(1, "Please select a service"),
  accessibleLocation: z.enum(["yes", "no", "unsure"]),
  equipmentProvided: z.enum(["yes", "no", "unsure"]),
  upgradeSystem: z.enum(["yes", "no"]),
  preferredDate: z.string().min(1, "Please select a preferred booking date"),
  additionalNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      houseAddress: "",
      complex: "",
      city: "",
      postalCode: "",
      propertyType: "home",
      serviceType: "",
      accessibleLocation: "yes",
      equipmentProvided: "no",
      upgradeSystem: "no",
      preferredDate: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Get webhook URL from environment variable (you'll need to add this)
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
      
      if (!webhookUrl) {
        toast({
          title: "Configuration Error",
          description: "Please contact us directly at 065 636 8911",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          // Send preferredDate as a plain date (YYYY-MM-DD) without time
          preferredDate: data.preferredDate,
          timestamp: formatToIsoWithOffset(new Date(), 120),
          source: "Prince DSTV Website",
        }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted! ✓",
          description: "We'll contact you shortly to discuss your requirements.",
        });
        form.reset();
        setStep(1);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please call us directly at 065 636 8911",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    if (step === 1) {
      fieldsToValidate = ["fullName", "phone", "email"];
    } else if (step === 2) {
      fieldsToValidate = ["houseAddress", "city", "postalCode", "propertyType"];
    } else if (step === 3) {
      fieldsToValidate = ["serviceType"];
    } else if (step === 4) {
      fieldsToValidate = ["accessibleLocation", "equipmentProvided", "upgradeSystem"];
    }

    if (fieldsToValidate.length > 0) {
      const isValid = await form.trigger(fieldsToValidate);
      if (!isValid) {
        return;
      }
    }

    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <section id="quote" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get Your Premium Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your requirements and we'll provide a detailed quote
          </p>
        </div>

        <Card className="max-w-3xl mx-auto glass-card silk-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Step {step} of 5
            </CardTitle>
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-12 rounded-full smooth-transition ${
                    s <= step ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="065 636 8911" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="houseAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>House Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main Street" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="complex"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Complex (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Complex / Estate / Unit (if applicable)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Centurion, Fourways" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 0157" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select property type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-popover">
                              <SelectItem value="home">Home</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="complex">Complex</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-popover">
                              <SelectItem value="new">New Installation</SelectItem>
                              <SelectItem value="extrav view">Extra View Setup</SelectItem>
                              <SelectItem value="signal">Signal Issue / Repair</SelectItem>
                              <SelectItem value="lnb">LNB Replacement</SelectItem>
                              <SelectItem value="mount">TV Wall Mounting</SelectItem>
                              <SelectItem value="relocation">Satellite Relocation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="accessibleLocation"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Is the dish location accessible?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  No
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="unsure" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Unsure
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="equipmentProvided"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Do you have equipment already?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  No
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="unsure" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Unsure
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="upgradeSystem"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Upgrading from an older system?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  No
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4 animate-fade-in">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Booking Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific requirements or questions?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="hover-lift"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  )}
                  
                  {step < 5 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 hover-lift"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 hover-lift"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-muted-foreground">
          <p>Prefer to speak directly? Call us at <strong className="text-primary">065 636 8911</strong></p>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
