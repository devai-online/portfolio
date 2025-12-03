import { CheckCircle2 } from 'lucide-react';

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
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-4">
            Technical & Professional
            <span className="block text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Over two decades of excellence in academic leadership and technical innovation
          </p>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
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
