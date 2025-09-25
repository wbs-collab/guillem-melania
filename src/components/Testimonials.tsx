import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const translations = {
  en: {
    title: "What Our Clients Say",
    subtitle: "Don't just take our word for it. Here's what local businesses say about working with us.",
    testimonial1: {
      name: "Marika Porricelli",
      business: "Psychologist",
      text: "The website they built for me is professional, elegant, and perfectly represents my practice. It has made it so much easier for clients to find me and book appointments."
    },
    testimonial2: {
      name: "Noemi Espurz",
      business: "La Focaccia Delight",
      text: "I'm so happy with my new restaurant website! It's visually stunning and easy to navigate! I highly recommend their services."
    }
  },
  es: {
    title: "Lo que Dicen Nuestros Clientes",
    subtitle: "No confíe solo en nuestra palabra. Esto es lo que dicen las empresas locales sobre trabajar con nosotros.",
    testimonial1: {
      name: "Marika Porricelli",
      business: "Psicóloga",
      text: "El sitio web que construyeron para mí es profesional, elegante y representa perfectamente mi práctica. Ha hecho que sea mucho más fácil para los clientes encontrarme y reservar citas."
    },
    testimonial2: {
      name: "Noemi Espurz",
      business: "La Focaccia Delight",
      text: "¡Estoy tan feliz con el nuevo sitio web de mi restaurante! ¡Es visualmente impresionante y fácil de navegar! Recomiendo encarecidamente sus servicios."
    }
  },
  it: {
    title: "Cosa Dicono i Nostri Clienti",
    subtitle: "Non fidarti solo della nostra parola. Ecco cosa dicono le aziende locali sulla collaborazione con noi.",
    testimonial1: {
      name: "Marika Porricelli",
      business: "Psicologa",
      text: "Il sito web che hanno costruito per me è professionale, elegante e rappresenta perfettamente la mia pratica. Ha reso molto più facile per i clienti trovarmi e prenotare appuntamenti."
    },
    testimonial2: {
      name: "Noemi Espurz",
      business: "La Focaccia Delight",
      text: "Sono così felice del nuovo sito web del mio ristorante! È visivamente sbalorditivo e facile da navigare! Consiglio vivamente i loro servizi."
    }
  }
};

interface TestimonialsProps {
  lang: "en" | "es" | "it";
}

const Testimonials = ({ lang }: TestimonialsProps) => {
  const t = translations[lang];

  const testimonials = [
    {
      name: t.testimonial1.name,
      business: t.testimonial1.business,
      rating: 5,
      text: t.testimonial1.text
    },
    {
      name: t.testimonial2.name,
      business: t.testimonial2.business,
      rating: 5,
      text: t.testimonial2.text
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 bg-gradient-card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-primary font-medium">
                  {testimonial.business}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;