import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  alt: string;
}

const ProductCard = ({ title, description, image, features, alt }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5519999999999"; // Substituir pelo número real
    const message = `Olá, quero orçamento da ${title}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={handleWhatsAppClick} className="w-full" size="lg">
          <MessageCircle className="mr-2 h-4 w-4" />
          Solicitar Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
