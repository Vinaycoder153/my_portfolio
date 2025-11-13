import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Bootstrap', 'Flexbox', 'Responsive Design'],
      color: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      category: 'Backend',
      skills: ['Python', 'Node.js', 'Express.js'],
      color: 'bg-secondary/10 text-secondary border-secondary/20',
    },
    {
      category: 'Database',
      skills: ['SQLite', 'SQL'],
      color: 'bg-accent/10 text-accent border-accent/20',
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'VS Code', 'GCP', 'OOPs', 'Prompt Engineering'],
      color: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-solving', 'Team Collaboration', 'Communication', 'Creativity', 'Leadership', 'Quick Learning', 'Adaptability'],
      color: 'bg-accent/10 text-accent border-accent/20',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-animated">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg mb-4">Crafting digital experiences with modern technologies</p>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full glow-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group p-8 hover-lift glass-effect hover:glow-border-accent transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold mb-6 gradient-text relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} px-4 py-2.5 text-sm font-medium hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl`}
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
