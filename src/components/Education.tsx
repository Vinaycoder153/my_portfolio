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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:glow-border transition-all duration-300 bg-card/50 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-accent">{edu.score}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
