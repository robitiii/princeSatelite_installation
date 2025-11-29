import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { IMAGES } from "@/assets/images";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:0656368911";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27656368911", "_blank");
  };

  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden silk-texture">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${IMAGES.heroDstv})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="glass-card px-4 py-2 rounded-full backdrop-blur-md">
              <p className="text-sm font-semibold text-white">✓ Same-Day Service</p>
            </div>
            <div className="glass-card px-4 py-2 rounded-full backdrop-blur-md">
              <p className="text-sm font-semibold text-white">✓ 10+ Years Experience</p>
            </div>
            <div className="glass-card px-4 py-2 rounded-full backdrop-blur-md">
              <p className="text-sm font-semibold text-white">✓ Premium Quality</p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Premium DSTV Installations
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Fast, Reliable & Precise Satellite Services Across Gauteng
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              onClick={scrollToQuote}
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 silk-shadow hover-lift text-lg px-8 py-6 rounded-xl font-bold"
            >
              Book a Detailed Quote
            </Button>
            
            <div className="flex gap-3 w-full sm:w-auto">
              <Button 
                size="lg" 
                onClick={handleCall}
                variant="outline"
                className="flex-1 sm:flex-initial glass-card border-white/30 text-white hover:bg-white/20 hover-lift text-base px-6 py-6 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                variant="outline"
                className="flex-1 sm:flex-initial glass-card border-white/30 text-white hover:bg-white/20 hover-lift text-base px-6 py-6 rounded-xl font-semibold"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-4">
            <p className="text-white/80 text-lg font-medium">
              📞 065 636 8911
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
