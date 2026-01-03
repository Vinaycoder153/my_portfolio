import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState('');
  const roles = ['Frontend Developer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayedRole(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedRole(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background with Multiple Layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-0" />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), 
                         linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite'
      }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="mb-6">
            <div className="inline-block px-6 py-2 rounded-full glass-effect border border-primary/30 mb-6 animate-pulse-glow">
              <span className="text-sm md:text-base text-primary font-medium">✨ Available for Opportunities</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text tracking-tight">
            VINAY M Y
          </h1>
          
          <div className="h-16 md:h-20 mb-8">
            <p className="text-3xl md:text-5xl gradient-text-animated font-bold">
              {displayedRole}
              <span className="animate-pulse text-accent">|</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Hassan, Karnataka</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>7090509135</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:vvvinay5630@gmail.com" className="hover:text-primary transition-colors">
                vvvinay5630@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="default" size="lg" className="glow-border hover-lift group relative overflow-hidden" asChild>
              <a href="vinay1portfolio.ccbp.tech" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Portfolio
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover-lift border-primary/30 hover:border-primary/60 hover:bg-primary/10" asChild>
              <a href="www.linkedin.com/in/vinaymy21" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover-lift border-accent/30 hover:border-accent/60 hover:bg-accent/10" asChild>
              <a href="https://github.com/Vinaycoder153" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="secondary" size="lg" className="animate-glow hover-lift text-lg px-8 py-6" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
