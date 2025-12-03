import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  "Principal of Vardhaman College of Engineering, providing visionary leadership that strengthened the institution's national standing in engineering education.",
  "Expert in regulatory compliance and accreditation frameworks under NAAC, NBA Tier-I, and Washington Accord standards.",
  "Implemented 30+ governance reforms enhancing accountability, innovation culture, and ethical academic processes.",
  "Technical expertise in VLSI, low-power computing, AI/ML hardware, and quantum technologies.",
  "Established 10+ Research & Innovation Centers and enabled major academia–industry–government collaborations.",
  "Secured ₹15+ crore through 20+ externally funded research and capacity-building projects.",
  "Developed key institutional research policies including IPR, consultancy, and interdisciplinary cluster frameworks.",
  "Steering VCE toward future-ready, globally benchmarked academic systems.",
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Technical & Professional
              <span className="block text-accent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Over two decades of excellence in academic leadership and technical innovation
            </p>
          </div>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`group flex gap-4 p-5 bg-card rounded-xl border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:-translate-x-1 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 80 + 200}ms` : '0ms' }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-foreground leading-relaxed">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
