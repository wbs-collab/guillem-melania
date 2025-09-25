import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const translations = {
  en: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the perfect plan for your business. No hidden fees, no surprises.",
    starterSite: {
      name: "Starter Site",
      price: "€150",
      monthly: "€10/month",
      description: "Perfect for small businesses getting started online",
      features: [
        "Up to 3 pages (Home, About, Contact)",
        "Professional template design",
        "Fully mobile-responsive",
        "Contact form with email integration",
        "Social media links",
        "Website hosting included",
        "Basic security & updates",
        "2 minor updates per month"
      ]
    },
    businessGrowth: {
      name: "Business Growth",
      price: "€225",
      monthly: "€15/month",
      description: "Most popular choice for growing businesses",
      popular: "Most Popular",
      features: [
        "Everything in Starter Site",
        "Up to 5 pages (Menu, Services, Gallery)",
        "Photo gallery integration",
        "Embedded Google Maps",
        "Enhanced security monitoring",
        "5 minor updates per month",
        "Priority support"
      ]
    },
    professionalOneOff: {
      name: "Professional One-Off",
      price: "€350",
      monthly: "One-time payment",
      description: "Custom solution with full ownership",
      features: [
        "Everything in Business Growth",
        "Custom brand-matched design",
        "1 year hosting included",
        "Full website ownership",
        "Optional maintenance plan (€120/year)",
        "Future changes at €40/hour",
        "Complete flexibility"
      ]
    },
    setup: "setup",
    contactUs: "Contact Us"
  },
  es: {
    title: "Precios Simples y Transparentes",
    subtitle: "Elija el plan perfecto para su negocio. Sin tarifas ocultas, sin sorpresas.",
    starterSite: {
      name: "Sitio de Inicio",
      price: "€150",
      monthly: "€10/mes",
      description: "Perfecto para pequeñas empresas que comienzan en línea",
      features: [
        "Hasta 3 páginas (Inicio, Acerca de, Contacto)",
        "Diseño de plantilla profesional",
        "Totalmente adaptable a móviles",
        "Formulario de contacto con integración de correo electrónico",
        "Enlaces a redes sociales",
        "Alojamiento web incluido",
        "Seguridad y actualizaciones básicas",
        "2 actualizaciones menores por mes"
      ]
    },
    businessGrowth: {
      name: "Crecimiento Empresarial",
      price: "€225",
      monthly: "€15/mes",
      description: "La opción más popular para empresas en crecimiento",
      popular: "Más Popular",
      features: [
        "Todo en el Sitio de Inicio",
        "Hasta 5 páginas (Menú, Servicios, Galería)",
        "Integración de galería de fotos",
        "Google Maps integrado",
        "Monitoreo de seguridad mejorado",
        "5 actualizaciones menores por mes",
        "Soporte prioritario"
      ]
    },
    professionalOneOff: {
      name: "Profesional de Pago Único",
      price: "€350",
      monthly: "Pago único",
      description: "Solución personalizada con propiedad total",
      features: [
        "Todo en Crecimiento Empresarial",
        "Diseño personalizado adaptado a la marca",
        "1 año de alojamiento incluido",
        "Propiedad total del sitio web",
        "Plan de mantenimiento opcional (€120/año)",
        "Cambios futuros a 40€/hora",
        "Flexibilidad completa"
      ]
    },
    setup: "configuración",
    contactUs: "Contáctanos"
  },
  it: {
    title: "Prezzi Semplici e Trasparenti",
    subtitle: "Scegli il piano perfetto per la tua attività. Nessun costo nascosto, nessuna sorpresa.",
    starterSite: {
      name: "Sito Iniziale",
      price: "€150",
      monthly: "€10/mese",
      description: "Perfetto per le piccole imprese che iniziano online",
      features: [
        "Fino a 3 pagine (Home, Chi siamo, Contatti)",
        "Design del modello professionale",
        "Completamente reattivo ai dispositivi mobili",
        "Modulo di contatto con integrazione email",
        "Link ai social media",
        "Hosting del sito web incluso",
        "Sicurezza e aggiornamenti di base",
        "2 aggiornamenti minori al mese"
      ]
    },
    businessGrowth: {
      name: "Crescita Aziendale",
      price: "€225",
      monthly: "€15/mese",
      description: "La scelta più popolare per le aziende in crescita",
      popular: "Più Popolare",
      features: [
        "Tutto nel Sito Iniziale",
        "Fino a 5 pagine (Menu, Servizi, Galleria)",
        "Integrazione della galleria fotografica",
        "Google Maps incorporato",
        "Monitoraggio della sicurezza avanzato",
        "5 aggiornamenti minori al mese",
        "Supporto prioritario"
      ]
    },
    professionalOneOff: {
      name: "Professionale una tantum",
      price: "€350",
      monthly: "Pagamento una tantum",
      description: "Soluzione personalizzata con piena proprietà",
      features: [
        "Tutto in Crescita Aziendale",
        "Design personalizzato abbinato al marchio",
        "1 anno di hosting incluso",
        "Piena proprietà del sito web",
        "Piano di manutenzione opzionale (€120/anno)",
        "Modifiche future a 40€/ora",
        "Flessibilità completa"
      ]
    },
    setup: "configurazione",
    contactUs: "Contattaci"
  }
};

interface PricingProps {
  lang: "en" | "es" | "it";
}

const Pricing = ({ lang }: PricingProps) => {
  const t = translations[lang];

  const plans = [
    {
      name: t.starterSite.name,
      price: t.starterSite.price,
      monthly: t.starterSite.monthly,
      description: t.starterSite.description,
      popular: false,
      features: t.starterSite.features
    },
    {
      name: t.businessGrowth.name,
      price: t.businessGrowth.price, 
      monthly: t.businessGrowth.monthly,
      description: t.businessGrowth.description,
      popular: true,
      features: t.businessGrowth.features
    },
    {
      name: t.professionalOneOff.name,
      price: t.professionalOneOff.price,
      monthly: t.professionalOneOff.monthly,
      description: t.professionalOneOff.description,
      popular: false,
      features: t.professionalOneOff.features
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 ${
              plan.popular 
                ? 'bg-gradient-primary text-primary-foreground scale-105' 
                : 'bg-gradient-card'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                  {t.businessGrowth.popular}
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {' '}{t.setup}
                  </span>
                </div>
                <div className={`text-lg font-semibold ${plan.popular ? 'text-primary-foreground' : 'text-accent'}`}>
                  {plan.monthly}
                </div>
                <p className={`mt-4 ${plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                    : 'bg-gradient-primary text-primary-foreground'
                }`}
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.contactUs}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;