import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at the top (within 50px)
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // Show when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCall = () => {
    window.location.href = "tel:0656368911";
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 smooth-transition",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="glass-card backdrop-blur-lg bg-card/95 border-b border-border/50 silk-shadow">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center silk-shadow group-hover:scale-110 smooth-transition">
                  <img
                    src="/favicon.png"
                    alt="Prince Satellite Installations logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden md:block">
                  <span className="text-lg font-bold text-foreground block leading-tight">
                    Prince Premium DSTV
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Installation's
                  </span>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("areas")}
                  className="text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                >
                  Service Areas
                </button>
                <button
                  onClick={() => scrollToSection("quote")}
                  className="text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                >
                  Get Quote
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                >
                  Contact
                </button>
              </div>

              {/* CTA Button - Desktop */}
              <Button
                onClick={handleCall}
                className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 hover-lift"
              >
                <Phone className="w-4 h-4 mr-2" />
                065 636 8911
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted smooth-transition"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden glass-card backdrop-blur-lg bg-card/95 border-b border-border/50 smooth-transition overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container px-4 py-4 mx-auto space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg smooth-transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg smooth-transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg smooth-transition"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg smooth-transition"
            >
              Service Areas
            </button>
            <button
              onClick={() => scrollToSection("quote")}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg smooth-transition"
            >
              Get Quote
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg smooth-transition"
            >
              Contact
            </button>
            <Button
              onClick={handleCall}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 065 636 8911
            </Button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
