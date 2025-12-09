import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    title: "Institutional Leadership",
    description: "Principal of Vardhaman College of Engineering, providing visionary leadership that strengthened the institution's national standing in engineering education."
  },
  {
    title: "Accreditation Expertise",
    description: "Expert in regulatory compliance and accreditation frameworks under NAAC, NBA Tier-I, and Washington Accord standards."
  },
  {
    title: "Governance Reforms",
    description: "Implemented 30+ governance reforms enhancing accountability, innovation culture, and ethical academic processes."
  },
  {
    title: "Technical Research",
    description: "Technical expertise in VLSI, low-power computing, AI/ML hardware, and quantum technologies."
  },
  {
    title: "Research Centers",
    description: "Established 10+ Research & Innovation Centers and enabled major academia–industry–government collaborations."
  },
  {
    title: "Funding & Grants",
    description: "Secured ₹15+ crore through 20+ externally funded research and capacity-building projects."
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p 
            className={`text-accent text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experience
          </p>
          <h2 
            className={`text-4xl lg:text-5xl font-heading text-foreground leading-tight mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Professional <span className="text-muted-foreground">Background</span>
          </h2>
          <p 
            className={`text-muted-foreground transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Over two decades of excellence in academic leadership and technical innovation.
          </p>
        </div>
        
        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`bg-card p-8 group hover:bg-background transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <span className="text-accent text-sm tracking-wider mb-4 block">
                0{index + 1}
              </span>
              <h3 className="text-xl font-heading text-foreground mb-3 group-hover:text-accent transition-colors">
                {exp.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;