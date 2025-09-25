import { Card } from "@/components/ui/card";
import { CheckCircle, Smartphone, Search, Headphones } from "lucide-react";

const translations = {
  en: {
    title: "Why Choose Us?",
    subtitle: "We specialize in creating websites that not only look great but also help your business succeed online.",
    professionalDesign: "Professional Design",
    professionalDesignDesc: "Modern, clean designs that represent your brand perfectly and build customer trust.",
    mobileResponsive: "Mobile Responsive",
    mobileResponsiveDesc: "Your website will look stunning on all devices - phones, tablets, and desktops.",
    seoOptimized: "SEO Optimized",
    seoOptimizedDesc: "Built with search engines in mind to help customers find your business online.",
    ongoingSupport: "Ongoing Support",
    ongoingSupportDesc: "Monthly maintenance and updates included to keep your website secure and fresh."
  },
  es: {
    title: "¿Por Qué Elegirnos?",
    subtitle: "Nos especializamos en crear sitios web que no solo se ven geniales, sino que también ayudan a su negocio a tener éxito en línea.",
    professionalDesign: "Diseño Profesional",
    professionalDesignDesc: "Diseños modernos y limpios que representan su marca a la perfección y generan la confianza del cliente.",
    mobileResponsive: "Adaptable a Móviles",
    mobileResponsiveDesc: "Su sitio web se verá impresionante en todos los dispositivos: teléfonos, tabletas y computadoras de escritorio.",
    seoOptimized: "Optimizado para SEO",
    seoOptimizedDesc: "Construido pensando en los motores de búsqueda para ayudar a los clientes a encontrar su negocio en línea.",
    ongoingSupport: "Soporte Continuo",
    ongoingSupportDesc: "Mantenimiento mensual y actualizaciones incluidas para mantener su sitio web seguro y actualizado."
  },
  it: {
    title: "Perché Sceglierci?",
    subtitle: "Siamo specializzati nella creazione di siti web che non solo hanno un bell'aspetto, ma aiutano anche la tua attività ad avere successo online.",
    professionalDesign: "Design Professionale",
    professionalDesignDesc: "Design moderni e puliti che rappresentano perfettamente il tuo marchio e creano fiducia nei clienti.",
    mobileResponsive: "Reattivo ai Dispositivi Mobili",
    mobileResponsiveDesc: "Il tuo sito web apparirà straordinario su tutti i dispositivi: telefoni, tablet e desktop.",
    seoOptimized: "Ottimizzato per SEO",
    seoOptimizedDesc: "Costruito pensando ai motori di ricerca per aiutare i clienti a trovare la tua attività online.",
    ongoingSupport: "Supporto Continuo",
    ongoingSupportDesc: "Manutenzione mensile e aggiornamenti inclusi per mantenere il tuo sito web sicuro e aggiornato."
  }
};

interface ServicesProps {
  lang: "en" | "es" | "it";
}

const Services = ({ lang }: ServicesProps) => {
  const t = translations[lang];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: t.professionalDesign,
      description: t.professionalDesignDesc
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: t.mobileResponsive,
      description: t.mobileResponsiveDesc
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: t.seoOptimized,
      description: t.seoOptimizedDesc
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: t.ongoingSupport,
      description: t.ongoingSupportDesc
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 bg-gradient-card">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;