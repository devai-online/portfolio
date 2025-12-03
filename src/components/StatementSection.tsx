import { Quote } from 'lucide-react';

const StatementSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Statement of <span className="text-accent">Candidacy</span>
            </h2>
            <p className="text-muted-foreground">IEEE SSIT Board of Governors</p>
          </div>
          
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/30" />
            <Quote className="absolute bottom-6 right-6 w-12 h-12 text-accent/30 rotate-180" />
            
            <blockquote className="relative z-10 text-lg lg:text-xl text-foreground leading-relaxed text-center italic">
              "I am honored to offer my candidacy for the IEEE SSIT Board of Governors. My vision 
              is to strengthen SSIT's role as a global leader in technology governance, responsible 
              innovation, and policy-oriented engagement. With substantial experience in academic 
              governance, quality assurance, accreditation, and IEEE leadership, I bring a 
              systems-focused approach to advancing SSIT's mission. As a Board member, I aim to 
              enhance SSIT's governance frameworks, expand strategic partnerships, and elevate 
              the Society's leadership in ethical technology policy, public understanding of 
              emerging technologies, and global capacity building."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
