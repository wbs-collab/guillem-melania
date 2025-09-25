import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing.starterSite.name"),
      price: t("pricing.starterSite.price"),
      monthly: t("pricing.starterSite.monthly"),
      description: t("pricing.starterSite.description"),
      popular: false,
      features: t("pricing.starterSite.features", { returnObjects: true }) as string[]
    },
    {
      name: t("pricing.businessGrowth.name"),
      price: t("pricing.businessGrowth.price"), 
      monthly: t("pricing.businessGrowth.monthly"),
      description: t("pricing.businessGrowth.description"),
      popular: true,
      features: t("pricing.businessGrowth.features", { returnObjects: true }) as string[]
    },
    {
      name: t("pricing.professionalOneOff.name"),
      price: t("pricing.professionalOneOff.price"),
      monthly: t("pricing.professionalOneOff.monthly"),
      description: t("pricing.professionalOneOff.description"),
      popular: false,
      features: t("pricing.professionalOneOff.features", { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
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
                  {t("pricing.businessGrowth.popular")}
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
                    {' '}{t("pricing.setup")}
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
                {t("pricing.contactUs")}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;