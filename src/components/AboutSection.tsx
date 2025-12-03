import { Award, BookOpen, Users, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  { icon: Award, value: '20+', label: 'Years Experience' },
  { icon: BookOpen, value: '150+', label: 'Faculty Mentored' },
  { icon: Users, value: '40+', label: 'IEEE Events' },
  { icon: Building2, value: '₹15+ Cr', label: 'Research Funding' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An accomplished academic leader with extensive experience in institutional governance, 
            strategic planning, and systems-level academic management. As Principal of Vardhaman 
            College of Engineering, I provide visionary leadership that has strengthened the 
            institution's national standing in engineering education.
          </p>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className={`group bg-card border border-border rounded-xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-accent/50 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100 + 200}ms` : '0ms' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-1">
                {item.value}
              </p>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
