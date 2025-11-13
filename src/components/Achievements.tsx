import { Card } from '@/components/ui/card';
import { Trophy, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const certifications = [
    { title: 'AWS Educate - Introduction to Generative AI', date: 'Oct 2025' },
    { title: 'AWS Educate - Machine Learning Foundations', date: 'Oct 2025' },
    { title: 'NxtWave - Build Your Own Dynamic Web Application', date: 'Oct 2025' },
    { title: 'Google Cloud Skills Boost - Introduction to Generative AI', date: 'Aug 2025' },
    { title: 'NxtWave - Programming Foundations (Python)', date: 'Aug 2025' },
    { title: 'Google - Build Real-World AI Applications with Gemini & Imagen', date: 'May 2025' },
    { title: 'Google - Inspect Rich Documents with Gemini Multimodality & RAG', date: 'May 2025' },
    { title: 'Google - Prompt Design in Vertex AI', date: 'Apr 2025' },
    { title: 'NxtWave - Build Your Own Responsive Website', date: 'Nov 2024' },
    { title: 'NxtWave - Introduction to Databases', date: '2018' },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 glow-border bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Trophy className="w-12 h-12 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-accent">🥇 1st Place - 24-Hour Online Dasara Hackathon</h3>
                <p className="text-lg text-muted-foreground mb-2">Mipzo EdTech Pvt. Ltd.</p>
                <p className="text-foreground/90">
                  Demonstrated exceptional problem-solving skills, rapid prototyping, and teamwork under pressure.
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 group-hover:bg-accent/20 transition-colors" />
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-4 hover:glow-border transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-foreground/90 flex-grow">{cert.title}</p>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 flex-shrink-0">
                    {cert.date}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
