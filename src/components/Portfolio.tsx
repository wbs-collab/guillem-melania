import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import marikaPage from "@/assets/Marika-page.png";
import focacciaPage from "@/assets/Focaccia-page.png";
import guillemPage from "@/assets/Guillem-page.png";

const translations = {
  en: {
    title: "Our Recent Work",
    subtitle: "See how we've helped local businesses establish their online presence with beautiful, functional websites.",
    project1: {
      title: "Marika Porricelli Psicologa",
      category: "Personal & Professional Website",
      description: "A professional website for a psychologist, offering information about services, contact details, and articles.",
      features: ["Services Showcase", "Contact Form", "Blog/Articles"]
    },
    project2: {
      title: "La Focaccia Delight",
      category: "Restaurant & Food",
      description: "A delicious-looking website for a focaccia restaurant, with a menu and online presence.",
      features: ["Online Menu", "Beautiful Gallery", "Contact Information"]
    },
    project3: {
      title: "Guillem Ribes Espurz",
      category: "Personal Portfolio",
      description: "A personal portfolio for a Robotics Master's student, showcasing papers, projects, and CV.",
      features: ["Project Showcase", "Publication List", "CV/Resume"]
    },
    viewProject: "View Project",
    viewAllProjects: "View All Projects"
  },
  es: {
    title: "Nuestro Trabajo Reciente",
    subtitle: "Vea cómo hemos ayudado a las empresas locales a establecer su presencia en línea con sitios web hermosos y funcionales.",
    project1: {
      title: "Marika Porricelli Psicologa",
      category: "Sitio Web Personal y Profesional",
      description: "Un sitio web profesional para una psicóloga, que ofrece información sobre servicios, datos de contacto y artículos.",
      features: ["Muestra de Servicios", "Formulario de Contacto", "Blog/Artículos"]
    },
    project2: {
      title: "La Focaccia Delight",
      category: "Restaurante y Comida",
      description: "Un sitio web de aspecto delicioso para un restaurante de focaccia, con menú y presencia en línea.",
      features: ["Menú en Línea", "Galería Hermosa", "Información de Contacto"]
    },
    project3: {
      title: "Guillem Ribes Espurz",
      category: "Portafolio Personal",
      description: "Un portafolio personal para un estudiante de maestría en robótica, que muestra artículos, proyectos y CV.",
      features: ["Muestra de Proyectos", "Lista de Publicaciones", "CV/Currículum"]
    },
    viewProject: "Ver Proyecto",
    viewAllProjects: "Ver Todos los Proyectos"
  },
  it: {
    title: "I Nostri Lavori Recenti",
    subtitle: "Guarda come abbiamo aiutato le aziende locali a stabilire la loro presenza online con siti web belli e funzionali.",
    project1: {
      title: "Marika Porricelli Psicologa",
      category: "Sito Web Personale e Professionale",
      description: "Un sito web professionale per una psicologa, che offre informazioni su servizi, dettagli di contatto e articoli.",
      features: ["Vetrina dei Servizi", "Modulo di Contatto", "Blog/Articoli"]
    },
    project2: {
      title: "La Focaccia Delight",
      category: "Ristorante e Cibo",
      description: "Un sito web dall'aspetto delizioso per un ristorante di focaccia, con menu e presenza online.",
      features: ["Menu Online", "Bella Galleria", "Informazioni di Contatto"]
    },
    project3: {
      title: "Guillem Ribes Espurz",
      category: "Portfolio Personale",
      description: "Un portfolio personale per uno studente di master in robotica, che mostra articoli, progetti e CV.",
      features: ["Vetrina dei Progetti", "Elenco delle Pubblicazioni", "CV/Resume"]
    },
    viewProject: "Vedi Progetto",
    viewAllProjects: "Vedi Tutti i Progetti"
  }
};

interface PortfolioProps {
  lang: "en" | "es" | "it";
}

const Portfolio = ({ lang }: PortfolioProps) => {
  const t = translations[lang];

  const projects = [
    {
      title: t.project1.title,
      category: t.project1.category,
      image: marikaPage,
      description: t.project1.description,
      features: t.project1.features,
      link: "https://www.marikaporricellipsicologa.it/"
    },
    {
      title: t.project2.title,
      category: t.project2.category,
      image: focacciaPage,
      description: t.project2.description,
      features: t.project2.features,
      link: "https://la-focaccia-delight.lovable.app/"
    },
    {
      title: t.project3.title,
      category: t.project3.category,
      image: guillemPage,
      description: t.project3.description,
      features: t.project3.features,
      link: "https://gribes02.github.io/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
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
                    {t.viewProject}
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
              {t.viewAllProjects}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;