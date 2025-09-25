import { Mail, MapPin } from "lucide-react";

const translations = {
  en: {
    title: "Guillem & Melania",
    subtitle: "We create beautiful, professional websites for local businesses. Let us help you establish a strong online presence that drives results.",
    servicesTitle: "Our Services",
    services: [
      "Website Design & Development",
      "Mobile Responsive Design",
      "SEO Optimization",
      "Website Maintenance",
      "Content Updates",
      "Hosting & Security"
    ],
    linksTitle: "Quick Links",
    pricingLink: "Pricing",
    workLink: "Our Work",
    contactLink: "Contact Us",
    copyright: "&copy; 2024 Guillem & Melania. All rights reserved.",
    tagline: "Helping local businesses succeed online, one beautiful website at a time.",
    locationValue: "Barcelona, Spain"
  },
  es: {
    title: "Guillem & Melania",
    subtitle: "Creamos sitios web hermosos y profesionales para empresas locales. Permítanos ayudarle a establecer una sólida presencia en línea que genere resultados.",
    servicesTitle: "Nuestros Servicios",
    services: [
      "Diseño y Desarrollo de Sitios Web",
      "Diseño Adaptable a Móviles",
      "Optimización SEO",
      "Mantenimiento de Sitios Web",
      "Actualizaciones de Contenido",
      "Alojamiento y Seguridad"
    ],
    linksTitle: "Enlaces Rápidos",
    pricingLink: "Precios",
    workLink: "Nuestro Trabajo",
    contactLink: "Contáctanos",
    copyright: "&copy; 2024 Guillem & Melania. Todos los derechos reservados.",
    tagline: "Ayudando a las empresas locales a tener éxito en línea, un sitio web hermoso a la vez.",
    locationValue: "Barcelona, España"
  },
  it: {
    title: "Guillem & Melania",
    subtitle: "Creiamo siti web belli e professionali per le aziende locali. Lascia che ti aiutiamo a stabilire una forte presenza online che porti risultati.",
    servicesTitle: "I Nostri Servizi",
    services: [
      "Progettazione e Sviluppo di Siti Web",
      "Design Reattivo ai Dispositivi Mobili",
      "Ottimizzazione SEO",
      "Manutenzione del Sito Web",
      "Aggiornamenti dei Contenuti",
      "Hosting e Sicurezza"
    ],
    linksTitle: "Link Rapidi",
    pricingLink: "Prezzi",
    workLink: "I Nostri Lavori",
    contactLink: "Contattaci",
    copyright: "&copy; 2024 Guillem & Melania. Tutti i diritti riservati.",
    tagline: "Aiutare le aziende locali ad avere successo online, un sito web bello alla volta.",
    locationValue: "Barcellona, Spagna"
  }
};

interface FooterProps {
  lang: "en" | "es" | "it";
}

const Footer = ({ lang }: FooterProps) => {
  const t = translations[lang];
  const services = t.services;

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              {t.subtitle}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:websitescollab@gmail.com" className="hover:text-primary-foreground/80 transition-colors">
                  websitescollab@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>{t.locationValue}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.servicesTitle}</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.linksTitle}</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors">
                  {t.pricingLink}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-foreground transition-colors">
                  {t.workLink}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  {t.contactLink}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
          <p dangerouslySetInnerHTML={{ __html: t.copyright }} />
          <p className="mt-2 text-sm">
            {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;