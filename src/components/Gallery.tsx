import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/assets/images";

const galleryItems = [
  {
    title: "New DSTV Installations & Repairs",
    description:
      "All new DSTV installations and general DSTV repairs, done neatly and professionally.",
    image: IMAGES.dishInstallation,
  },
  {
    title: "Explora & Decoder Installations",
    description:
      "Explora 1/2A/3A/Ultra, DSTV decoders, HD PVR decoders and OVHD installations.",
    image: IMAGES.exploraDish,
  },
  {
    title: "Smart LNB & Signal Problems",
    description:
      "Smart LNB installation, fault finding, signal problems and fuzzy or no picture issues.",
    image: IMAGES.dstvDish,
  },
  {
    title: "WiFi Connector & Smart TV Setup",
    description:
      "WiFi connector setup, Smart TV wizard setup and surround sound configuration.",
    image: IMAGES.tvSetup,
  },
  {
    title: "TV Mounting & Supply and Fix",
    description:
      "Professional TV mounting plus supply and fix of brackets and related equipment.",
    image: IMAGES.tvReview,
  },
  {
    title: "Relocation & Reinstallation",
    description:
      "Relocation and reinstallation of existing DSTV equipment with neat cabling.",
    image: IMAGES.fullSetup,
  },
  {
    title: "Dual View & Triple View Setup",
    description:
      "Dual view and triple view setups so you can watch DSTV in multiple rooms.",
    image: IMAGES.heroDstv,
  },
  {
    title: "Communal DSTV & Service Areas",
    description:
      "Communal DSTV installations for residential homes, complexes, offices, factories and outdoor entertainment areas.",
    image: IMAGES.dishInstallation,
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Service Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a visual overview of the premium DSTV services offered for homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden hover-lift hover-glow group border-border/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary smooth-transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
