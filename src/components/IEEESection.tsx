import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ieeeHighlights = [
  "Chair, IEEE CAS/EDS Joint Chapter (2025–26)",
  "Founding Advisor, IEEE-HKN Nu Kappa Chapter",
  "Organized 40+ IEEE international/national events",
  "Represented India on multiple global IEEE committees",
  "Leadership across IEEE CAS, EDS, HKN, Education Society, Computer Society, and Sensors Council",
  "Established governance frameworks for ethics, leadership development, and chapter sustainability",
];

const IEEESection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="ieee" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent/10 animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary-foreground/5 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              IEEE & <span className="text-accent">SSIT Service</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Significant contributions to IEEE and SSIT through leadership that strengthens 
              organizational structures, enhances policy alignment, and expands global community engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {ieeeHighlights.map((highlight, index) => (
              <div 
                key={index}
                className={`group flex items-start gap-3 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 transition-all duration-500 hover:bg-primary-foreground/15 hover:border-accent/50 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <p className="text-primary-foreground/90">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEEESection;
