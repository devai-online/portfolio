import { Star } from 'lucide-react';

const ieeeHighlights = [
  "Chair, IEEE CAS/EDS Joint Chapter (2025–26)",
  "Founding Advisor, IEEE-HKN Nu Kappa Chapter",
  "Organized 40+ IEEE international/national events",
  "Represented India on multiple global IEEE committees",
  "Leadership across IEEE CAS, EDS, HKN, Education Society, Computer Society, and Sensors Council",
  "Established governance frameworks for ethics, leadership development, and chapter sustainability",
];

const IEEESection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
            IEEE & <span className="text-accent">SSIT Service</span>
          </h2>
          <p className="text-primary-foreground/70 text-center mb-12 text-lg max-w-2xl mx-auto">
            Significant contributions to IEEE and SSIT through leadership that strengthens 
            organizational structures, enhances policy alignment, and expands global community engagement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {ieeeHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
