import { Satellite, Wrench, Radio, Monitor, Cable, Package, TrendingUp, MapPin, Wifi, Users, Building, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const services = [
  { icon: Satellite, title: "DSTV Dish Installations", description: "Professional satellite dish setup with optimal signal positioning" },
  { icon: Wrench, title: "Repairs & Troubleshooting", description: "Expert diagnosis and repair of all DSTV-related issues" },
  { icon: Radio, title: "Signal Fixing", description: "Resolve poor signal quality and optimize reception" },
  { icon: Monitor, title: "Extra View Setup", description: "Multi-room viewing with Extra View installations" },
  { icon: Cable, title: "LNB Replacement", description: "Quality LNB upgrades for better signal quality" },
  { icon: Package, title: "Decoder Upgrades", description: "Latest decoder installations and configurations" },
  { icon: TrendingUp, title: "TV Wall Mounting", description: "Secure and aesthetically pleasing TV mounting" },
  { icon: MapPin, title: "Satellite Relocation", description: "Safe repositioning of existing satellite equipment" },
  { icon: Wifi, title: "Fibre-to-DSTV Integration", description: "Seamless integration of streaming and satellite" },
  { icon: Users, title: "Communal Dish Installations", description: "Multi-unit satellite solutions for complexes" },
  { icon: Building, title: "Business DSTV Solutions", description: "Commercial satellite installations and support" },
  { icon: Home, title: "Home DSTV Solutions", description: "Residential satellite services tailored to your needs" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DSTV solutions for homes and businesses across Gauteng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover-lift hover-glow group cursor-pointer border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary smooth-transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
