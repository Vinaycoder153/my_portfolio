import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';

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
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Portfolio Highlights</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-animated">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Showcasing innovative solutions and creative development work
          </p>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full glow-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover-lift glass-effect hover:glow-border-accent transition-all duration-500 overflow-hidden relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-border">
                    <ExternalLink className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300" 
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        View Live Project
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
