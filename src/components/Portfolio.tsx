import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioGym from "@/assets/portfolio-gym.jpg";
import portfolioBakery from "@/assets/portfolio-bakery.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "La Bella Vista Restaurant",
      category: "Restaurant & Hospitality",
      image: portfolioRestaurant,
      description: "Elegant restaurant website with online menu, reservation system, and beautiful food photography gallery.",
      features: ["Online Menu", "Reservation System", "Photo Gallery"]
    },
    {
      title: "FitZone Gym",
      category: "Fitness & Health", 
      image: portfolioGym,
      description: "Dynamic fitness center website with class schedules, trainer profiles, and membership information.",
      features: ["Class Schedules", "Trainer Profiles", "Membership Plans"]
    },
    {
      title: "Sweet Delights Bakery",
      category: "Local Bakery",
      image: portfolioBakery,
      description: "Charming bakery website showcasing fresh products with online ordering and pickup scheduling.",
      features: ["Product Showcase", "Online Ordering", "Pickup Scheduling"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Recent Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped local businesses establish their online presence with beautiful, functional websites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 bg-gradient-card">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;