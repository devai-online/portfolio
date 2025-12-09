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
    <section id="ieee" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p 
              className={`text-accent text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              IEEE Leadership
            </p>
            <h2 
              className={`text-4xl lg:text-5xl font-heading leading-tight mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              IEEE & SSIT
              <br />
              <span className="text-accent">Service</span>
            </h2>
            <p 
              className={`text-primary-foreground/70 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Significant contributions to IEEE and SSIT through leadership that strengthens 
              organizational structures, enhances policy alignment, and expands global community engagement.
            </p>
          </div>
          
          {/* Right column - Highlights */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {ieeeHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-5 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/5 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <span className="text-accent text-sm font-medium shrink-0">
                    0{index + 1}
                  </span>
                  <p className="text-primary-foreground/90">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IEEESection;