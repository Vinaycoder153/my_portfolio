import { Card } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'NDRK First Grade College, Hassan',
      period: '2024 - 2027',
      score: 'CGPA: 8.33',
      icon: GraduationCap,
    },
    {
      degree: 'Pre-University Course (PUC)',
      institution: 'BGS Science and Commerce PU College, Hassan',
      period: '2021 - 2023',
      score: '90.16%',
      icon: Award,
    },
    {
      degree: 'Secondary School (SSLC)',
      institution: 'KPS Chindanhalligate, Arsikere',
      period: '2018 - 2021',
      score: '87.84%',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-animated">Education</h2>
          <p className="text-muted-foreground text-lg mb-4">Academic excellence & continuous learning</p>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full glow-border" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift glass-effect hover:glow-border-accent transition-all duration-500 relative overflow-hidden group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-border">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-3 text-lg">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-muted/50 text-muted-foreground">{edu.period}</span>
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-accent font-bold border border-accent/30">{edu.score}</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: '100ms' }} />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
