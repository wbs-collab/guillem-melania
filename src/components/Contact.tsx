import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock } from "lucide-react";

const translations = {
  en: {
    title: "Let's Build Your Website",
    subtitle: "Ready to take your business online? Get in touch and let's discuss your project.",
    formTitle: "Send us a message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone (optional)",
    businessName: "Business Name",
    message: "Tell us about your project",
    messagePlaceholder: "What kind of website do you need? What are your goals?",
    sendMessage: "Send Message",
    infoTitle: "Get in touch",
    infoSubtitle: "We'd love to hear about your project. Drop us a line and we'll get back to you with a custom quote.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Barcelona, Spain",
    responseLabel: "Response Time",
    responseValue: "Within 24 hours"
  },
  es: {
    title: "Construyamos su Sitio Web",
    subtitle: "¿Listo para llevar su negocio en línea? Póngase en contacto y discutamos su proyecto.",
    formTitle: "Envíenos un mensaje",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono (opcional)",
    businessName: "Nombre de la Empresa",
    message: "Cuéntenos sobre su proyecto",
    messagePlaceholder: "¿Qué tipo de sitio web necesita? ¿Cuáles son sus objetivos?",
    sendMessage: "Enviar Mensaje",
    infoTitle: "Póngase en contacto",
    infoSubtitle: "Nos encantaría saber de su proyecto. Escríbanos y le responderemos con una cotización personalizada.",
    emailLabel: "Correo Electrónico",
    locationLabel: "Ubicación",
    locationValue: "Barcelona, España",
    responseLabel: "Tiempo de Respuesta",
    responseValue: "Dentro de 24 horas"
  },
  it: {
    title: "Costruiamo il Tuo Sito Web",
    subtitle: "Pronto a portare la tua attività online? Mettiti in contatto e discutiamo del tuo progetto.",
    formTitle: "Inviaci un messaggio",
    firstName: "Nome",
    lastName: "Cognome",
    email: "Email",
    phone: "Telefono (opzionale)",
    businessName: "Nome dell'Azienda",
    message: "Parlaci del tuo progetto",
    messagePlaceholder: "Di che tipo di sito web hai bisogno? Quali sono i tuoi obiettivi?",
    sendMessage: "Invia Messaggio",
    infoTitle: "Mettiti in contatto",
    infoSubtitle: "Ci piacerebbe sapere del tuo progetto. Scrivici una riga e ti risponderemo con un preventivo personalizzato.",
    emailLabel: "Email",
    locationLabel: "Posizione",
    locationValue: "Barcellona, Spagna",
    responseLabel: "Tempo di Risposta",
    responseValue: "Entro 24 ore"
  }
};

interface ContactProps {
  lang: "en" | "es" | "it";
}

const Contact = ({ lang }: ContactProps) => {
  const t = translations[lang];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: t.emailLabel,
      value: "websitescollab@gmail.com",
      href: "mailto:websitescollab@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: t.locationLabel,
      value: t.locationValue,
      href: null
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      label: t.responseLabel,
      value: t.responseValue,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-soft border-0 bg-gradient-card animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t.formTitle}
            </h3>
            
            <form action="https://formspree.io/f/mvgwgwrg" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">{t.firstName}</Label>
                  <Input id="firstName" name="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">{t.lastName}</Label>
                  <Input id="lastName" name="lastName" required className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">{t.email}</Label>
                <Input id="email" name="email" type="email" required className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">{t.phone}</Label>
                <Input id="phone" name="phone" type="tel" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="business" className="text-foreground">{t.businessName}</Label>
                <Input id="business" name="business" required className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">{t.message}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="mt-1 min-h-[120px]"
                  placeholder={t.messagePlaceholder}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-primary-foreground" 
                size="lg"
              >
                {t.sendMessage}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="animate-scale-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.infoTitle}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t.infoSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-primary hover:text-primary-glow transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;