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
      {/* Animated Background */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-animated">About Me</h2>
          <p className="text-muted-foreground text-lg mb-4">Passionate about creating impactful digital solutions</p>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full glow-border" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-10 glass-effect hover:glow-border-accent transition-all duration-500 mb-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_linear_infinite]" />
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 relative z-10">
              Motivated and detail-oriented <span className="gradient-text font-semibold">frontend & full-stack developer</span> with hands-on experience in building modern, responsive web applications using JavaScript, React, HTML, CSS, and Node.js. Strong foundation in software design, problem-solving, and API integration. Adept at delivering user-centric solutions and exploring new technologies such as <span className="text-primary font-semibold">cloud platforms</span> and <span className="text-accent font-semibold">generative AI</span>. Seeking internship or entry-level opportunities to contribute, learn, and grow as a developer.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group/item hover-lift cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover/item:from-primary/30 group-hover/item:to-accent/30 transition-all duration-300 glow-border-accent">
                      <Icon className="w-10 h-10 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="font-semibold text-foreground group-hover/item:gradient-text transition-all duration-300">{item.title}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
