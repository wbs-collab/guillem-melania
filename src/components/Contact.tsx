import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Email",
      value: "websitescollab@gmail.com",
      href: "mailto:websitescollab@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: "Location",
      value: "Barcelona, Spain",
      href: null
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Your Website
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business online? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-soft border-0 bg-gradient-card animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h3>
            
            <form action="https://formspree.io/f/mvgwgwrg" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input id="firstName" name="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input id="lastName" name="lastName" required className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone (optional)</Label>
                <Input id="phone" name="phone" type="tel" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="business" className="text-foreground">Business Name</Label>
                <Input id="business" name="business" required className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Tell us about your project</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="mt-1 min-h-[120px]"
                  placeholder="What kind of website do you need? What are your goals?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-primary-foreground" 
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="animate-scale-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get in touch
              </h3>
              <p className="text-muted-foreground text-lg">
                We'd love to hear about your project. Drop us a line and we'll get back to you with a custom quote.
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