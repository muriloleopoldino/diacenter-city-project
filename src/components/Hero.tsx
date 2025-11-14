import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511948990884"; // Substituir pelo número real
    const message = "Olá! Gostaria de solicitar um orçamento de telhas.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Telhas Galvanizadas e Sanduíche em Descalvado
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
          Soluções completas em cobertura metálica com qualidade garantida e entrega rápida para sua obra!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 shadow-2xl border-2 border-primary-foreground"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Peça seu Orçamento — Rápido via WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
