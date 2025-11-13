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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:glow-border transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} px-4 py-2 text-sm font-medium hover:scale-110 transition-transform duration-200`}
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
