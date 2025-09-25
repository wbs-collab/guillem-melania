import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    "Website Design & Development",
    "Mobile Responsive Design",
    "SEO Optimization",
    "Website Maintenance",
    "Content Updates",
    "Hosting & Security"
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Guillem & Melania</h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              We create beautiful, professional websites for local businesses. 
              Let us help you establish a strong online presence that drives results.
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
                <span>Barcelona, Spain</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-foreground transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Guillem & Melania. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Helping local businesses succeed online, one beautiful website at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;