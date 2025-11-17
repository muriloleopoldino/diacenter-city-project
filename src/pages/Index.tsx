import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, MapPin, Phone, Instagram } from "lucide-react";
import telhaGalvanizada from "@/assets/telha-galvanizada.jpg";
import telhaSanduiche from "@/assets/telha-sanduiche.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";

const Index = () => {
  const products = [
    {
      title: "Telha Galvanizada Simples",
      description: "Solução econômica e resistente para sua cobertura",
      image: telhaGalvanizada,
      alt: "Telha galvanizada ondulada - DIACENTER CITY",
      features: [
        "TP - 40",
        "Alta resistência à corrosão",
        "Durabilidade superior",
        "Fácil instalação",
        "Excelente custo-benefício",
      ],
    },
    {
      title: "Telha Sanduíche",
      description: "Conforto térmico e acústico premium",
      image: telhaSanduiche,
      alt: "Telha sanduíche com isolamento térmico - DIACENTER CITY",
      features: [
        "TP - 40",
        "Isolamento térmico eficiente",
        "Economia de energia",
        "Design moderno",
        "Ideal para ambientes climatizados",
      ],
    },
  ];

  const galleryImages = [
    { src: galeria1, alt: "Obra finalizada com telhas galvanizadas - Descalvado" },
    { src: galeria2, alt: "Instalação de telhas - Equipe DIACENTER CITY" },
    { src: galeria3, alt: "Estoque de telhas DIACENTER CITY" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Produtos certificados e testados",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Atendimento ágil em Descalvado e região",
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de expertise no mercado",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatsAppButton />

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Nossos Produtos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos as melhores soluções em telhas para sua obra
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Sobre a DIACENTER CITY</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              A DIACENTER CITY é referência em Descalvado e região no fornecimento de telhas galvanizadas simples e sanduíches. 
              Trabalhamos com produtos de alta qualidade, garantindo durabilidade e excelente custo-benefício para sua obra.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nossa missão é oferecer soluções completas em cobertura metálica com atendimento personalizado, 
              entrega rápida e suporte técnico especializado para cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Nossa Galeria</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">Estamos prontos para atender você</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Localização</h3>
                    <p className="text-muted-foreground">Descalvado - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefone / WhatsApp</h3>
                    <p className="text-muted-foreground">(11) 94899-0884</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary"
                      onClick={() =>
                        window.open("https://wa.me/5511948990884?text=Olá! Gostaria de mais informações sobre as telhas!", "_blank")
                      }
                    >
                      Falar no WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary"
                      onClick={() => window.open("https://www.instagram.com/diace_ntertelhasgalvanizadas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")}
                    >
                      @diacentercity
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground text-sm">Segunda a Sexta: 08:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236955.28435334662!2d-47.8155779588679!3d-21.87965334225581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b80f53e34bf2e1%3A0x209affca710d65e1!2sDescalvado%20-%20SP%2C%2013690-000!5e0!3m2!1spt-BR!2sbr!4v1763351104385!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização DIACENTER CITY em Descalvado-SP"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">DIACENTER CITY</p>
          <p className="text-sm opacity-80">Telhas Galvanizadas e Sanduíche em Descalvado - SP</p>
          <p className="text-xs opacity-60 mt-4">© 2025 DIACENTER CITY. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
