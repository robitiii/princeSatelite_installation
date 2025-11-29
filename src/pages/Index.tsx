import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import About from "@/components/About";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <ServiceAreas />
      <About />
      <QuoteForm />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
