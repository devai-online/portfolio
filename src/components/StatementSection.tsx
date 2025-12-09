import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StatementSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="statement" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className={`text-accent text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Candidacy
          </p>
          <h2 
            className={`text-4xl lg:text-5xl font-heading text-foreground leading-tight mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Statement of <span className="text-muted-foreground">Purpose</span>
          </h2>
          <p 
            className={`text-muted-foreground mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            IEEE SSIT Board of Governors
          </p>
          
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Quote marks */}
            <span className="absolute -top-8 left-0 text-8xl text-accent/20 font-heading leading-none">
              "
            </span>
            <span className="absolute -bottom-16 right-0 text-8xl text-accent/20 font-heading leading-none">
              "
            </span>
            
            <blockquote className="relative text-xl lg:text-2xl text-foreground leading-relaxed font-heading font-normal px-8 lg:px-16">
              I am honored to offer my candidacy for the IEEE SSIT Board of Governors. My vision 
              is to strengthen SSIT's role as a global leader in technology governance, responsible 
              innovation, and policy-oriented engagement. With substantial experience in academic 
              governance, quality assurance, accreditation, and IEEE leadership, I bring a 
              systems-focused approach to advancing SSIT's mission.
            </blockquote>
          </div>
          
          <div 
            className={`mt-16 pt-8 border-t border-border transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              As a Board member, I aim to enhance SSIT's governance frameworks, expand strategic 
              partnerships, and elevate the Society's leadership in ethical technology policy, 
              public understanding of emerging technologies, and global capacity building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;