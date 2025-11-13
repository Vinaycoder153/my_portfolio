import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Showcases education, projects, and contact info using React components. Optimized for all devices using Bootstrap & CSS.',
      tech: ['React JS', 'Bootstrap', 'CSS'],
      link: 'https://vinay1portfolio.ccbp.tech',
    },
    {
      title: 'Todos Application',
      description: 'CRUD-based todo app with persistent local storage for seamless task management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://vinayprotodo.ccbp.tech',
    },
    {
      title: 'My Projects Page',
      description: 'Responsive layout showcasing personal projects with clean design and smooth user experience.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://vinaymotive.ccbp.tech',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:glow-border transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button variant="default" className="w-full glow-border" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
