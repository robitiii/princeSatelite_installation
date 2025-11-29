import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleCall = () => {
    window.location.href = "tel:0656368911";
  };

  const handleEmail = () => {
    window.location.href = "mailto:trymagaya3@gmail.com";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27656368911", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to get started? Contact us today for premium DSTV services
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="glass-card hover-lift hover-glow group cursor-pointer" onClick={handleCall}>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Call Us</h3>
              <p className="text-lg font-semibold text-primary">065 636 8911</p>
              <Button 
                onClick={handleCall}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift hover-glow group cursor-pointer" onClick={handleWhatsApp}>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
              <p className="text-lg font-semibold text-primary">Quick Chat</p>
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift hover-glow group cursor-pointer" onClick={handleEmail}>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Email Us</h3>
              <p className="text-sm font-medium text-muted-foreground break-all">trymagaya3@gmail.com</p>
              <Button 
                onClick={handleEmail}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
