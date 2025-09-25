import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import marikaPage from "@/assets/Marika-page.png";
import focacciaPage from "@/assets/Focaccia-page.png";
import guillemPage from "@/assets/Guillem-page.png";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolio.project1.title"),
      category: t("portfolio.project1.category"),
      image: marikaPage,
      description: t("portfolio.project1.description"),
      features: t("portfolio.project1.features", { returnObjects: true }) as string[],
      link: "https://www.marikaporricellipsicologa.it/"
    },
    {
      title: t("portfolio.project2.title"),
      category: t("portfolio.project2.category"),
      image: focacciaPage,
      description: t("portfolio.project2.description"),
      features: t("portfolio.project2.features", { returnObjects: true }) as string[],
      link: "https://la-focaccia-delight.lovable.app/"
    },
    {
      title: t("portfolio.project3.title"),
      category: t("portfolio.project3.category"),
      image: guillemPage,
      description: t("portfolio.project3.description"),
      features: t("portfolio.project3.features", { returnObjects: true }) as string[],
      link: "https://gribes02.github.io/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
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
                    {t("portfolio.viewProject")}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground">
              {t("portfolio.viewAllProjects")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;