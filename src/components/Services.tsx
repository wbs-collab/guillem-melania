import { Card } from "@/components/ui/card";
import { CheckCircle, Smartphone, Search, Headphones } from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Professional Design",
      description: "Modern, clean designs that represent your brand perfectly and build customer trust."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Responsive", 
      description: "Your website will look stunning on all devices - phones, tablets, and desktops."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO Optimized",
      description: "Built with search engines in mind to help customers find your business online."
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Ongoing Support",
      description: "Monthly maintenance and updates included to keep your website secure and fresh."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating websites that not only look great but also help your business succeed online.
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