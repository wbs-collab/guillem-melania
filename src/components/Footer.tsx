import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const services: string[] = t("footer.services", { returnObjects: true });

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("footer.title")}</h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              {t("footer.subtitle")}
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
                <span>{t("contact.locationValue")}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.linksTitle")}</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors">
                  {t("footer.pricingLink")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-foreground transition-colors">
                  {t("footer.workLink")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  {t("footer.contactLink")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
          <p dangerouslySetInnerHTML={{ __html: t("footer.copyright") }} />
          <p className="mt-2 text-sm">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;