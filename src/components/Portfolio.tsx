import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import marikaPage from "@/assets/Marika-page.png";
import focacciaPage from "@/assets/Focaccia-page.png";
import guillemPage from "@/assets/Guillem-page.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Marika Porricelli Psicologa",
      category: "Personal & Professional Website",
      image: marikaPage,
      description: "A professional website for a psychologist, offering information about services, contact details, and articles.",
      features: ["Services Showcase", "Contact Form", "Blog/Articles"],
      link: "https://www.marikaporricellipsicologa.it/"
    },
    {
      title: "La Focaccia Delight",
      category: "Restaurant & Food",
      image: focacciaPage,
      description: "A delicious-looking website for a focaccia restaurant, with a menu and online presence.",
      features: ["Online Menu", "Beautiful Gallery", "Contact Information"],
      link: "https://la-focaccia-delight.lovable.app/"
    },
    {
      title: "Guillem Ribes Espurz",
      category: "Personal Portfolio",
      image: guillemPage,
      description: "A personal portfolio for a Robotics Master's student, showcasing papers, projects, and CV.",
      features: ["Project Showcase", "Publication List", "CV/Resume"],
      link: "https://gribes02.github.io/"
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

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full group">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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