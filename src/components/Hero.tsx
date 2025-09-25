import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { LanguageSwitcher } from "./LanguageSwitcher";

const translations = {
  en: {
    title: "Guillem & Melania",
    subtitle: "Beautiful websites for local businesses",
    description: "We create stunning, mobile-responsive websites that help your business grow online. Professional design, affordable pricing, and ongoing support.",
    viewWork: "View Our Work",
    contactUs: "Contact Us",
  },
  es: {
    title: "Guillem & Melania",
    subtitle: "Sitios web hermosos para negocios locales",
    description: "Creamos sitios web impresionantes y adaptables a dispositivos móviles que ayudan a su negocio a crecer en línea. Diseño profesional, precios asequibles y soporte continuo.",
    viewWork: "Ver Nuestro Trabajo",
    contactUs: "Contáctanos",
  },
  it: {
    title: "Guillem & Melania",
    subtitle: "Siti web bellissimi per aziende locali",
    description: "Creiamo siti web straordinari e reattivi per dispositivi mobili che aiutano la tua azienda a crescere online. Design professionale, prezzi convenienti e supporto continuo.",
    viewWork: "Guarda i Nostri Lavori",
    contactUs: "Contattaci",
  },
};

interface HeroProps {
  lang: "en" | "es" | "it";
}

const Hero = ({ lang }: HeroProps) => {
  const t = translations[lang];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <LanguageSwitcher currentLang={lang} />
      <div className="absolute inset-0 bg-gradient-hero/80"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
            {t.subtitle}
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.viewWork}
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.contactUs}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;