import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  "Johannesburg", "Pretoria", "Alberton", "Benoni", "Boksburg", "Centurion",
  "Edenvale", "Green Valley", "Waterkloof Glen", "Witbank", "Riviera",
  "Blue Hills", "Florida", "Honeydew", "Jet Park", "Monument Park",
  "Fourways", "Midrand"
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Service Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proudly serving homes and businesses across Gauteng
          </p>
        </div>

        <Card className="glass-card silk-shadow max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-primary/5 smooth-transition group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-150 smooth-transition" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary smooth-transition">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Don't see your area? Contact us - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
