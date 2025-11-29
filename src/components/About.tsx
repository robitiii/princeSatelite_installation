import { Award, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionImage from "@/components/SectionImage";
import { IMAGES } from "@/assets/images";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <Card className="glass-card silk-shadow animate-fade-in">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  About Prince Premium DSTV Installation's
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Prince Premium DSTV Installation's delivers premium-quality satellite services with precision, 
                    reliability, and long-lasting results. Serving homes and businesses across Gauteng, 
                    we offer fast, professional installations backed by years of experience and a commitment 
                    to customer satisfaction.
                  </p>
                  <Button
                    onClick={() =>
                      document
                        .getElementById("gallery")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 hover-lift"
                  >
                    View Service Gallery
                  </Button>
                </div>

                <SectionImage
                  src={IMAGES.AboutMe}
                  alt="Prince Premium DSTV Installation's team member"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-3 group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Accredited Installer</h3>
                  <p className="text-sm text-muted-foreground">Certified and trusted by industry standards</p>
                </div>

                <div className="text-center space-y-3 group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Guaranteed Satisfaction</h3>
                  <p className="text-sm text-muted-foreground">Quality workmanship you can rely on</p>
                </div>

                <div className="text-center space-y-3 group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Swift Response</h3>
                  <p className="text-sm text-muted-foreground">Same-day service available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
