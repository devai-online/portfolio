import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Faculty Mentored' },
  { value: '40+', label: 'IEEE Events' },
  { value: '₹15Cr+', label: 'Research Funding' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left column - Title */}
          <div className="lg:col-span-4">
            <p 
              className={`text-accent text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              About
            </p>
            <h2 
              className={`text-4xl lg:text-5xl font-heading text-foreground leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Academic
              <br />
              <span className="text-muted-foreground">Leadership</span>
            </h2>
          </div>
          
          {/* Right column - Content */}
          <div className="lg:col-span-8">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              An accomplished academic leader with extensive experience in institutional governance, 
              strategic planning, and systems-level academic management. As Principal of Vardhaman 
              College of Engineering, I provide visionary leadership that has strengthened the 
              institution's national standing in engineering education.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <p className="text-3xl lg:text-4xl font-heading text-foreground mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {item.label}
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

export default AboutSection;