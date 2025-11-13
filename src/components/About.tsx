import { Card } from '@/components/ui/card';
import { Code2, Zap, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent collaboration skills',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creative solutions to complex challenges',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 glow-border bg-card/50 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Motivated and detail-oriented frontend & full-stack developer with hands-on experience in building modern,
              responsive web applications using JavaScript, React, HTML, CSS, and Node.js. Strong foundation in software
              design, problem-solving, and API integration. Adept at delivering user-centric solutions and exploring new
              technologies such as cloud platforms and generative AI. Seeking internship or entry-level opportunities to
              contribute, learn, and grow as a developer.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:glow-border transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
