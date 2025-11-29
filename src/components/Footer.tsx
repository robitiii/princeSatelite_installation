import { Satellite } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-primary/10 border-t border-border/50">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Satellite className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">Prince Premium DSTV</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium satellite installation's across Gauteng
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("areas")}
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Johannesburg</li>
              <li>Pretoria</li>
              <li>Centurion</li>
              <li>Fourways</li>
              <li>Midrand</li>
              <li>And more...</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Phone:</strong><br />
                065 636 8911
              </li>
              <li>
                <strong className="text-foreground">Email:</strong><br />
                trymagaya3@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Prince Premium DSTV Installation's - Premium Satellite Solutions
          </p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground">
            <button className="hover:text-primary smooth-transition">Privacy Policy</button>
            <button className="hover:text-primary smooth-transition">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
