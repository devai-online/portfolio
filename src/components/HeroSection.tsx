import professorPhoto from '@/assets/professor-photo.png';
import { Mail, Phone, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
              <span className="text-accent text-sm font-medium tracking-wide">
                SMIEEE • FIETE • FIE • SMACM
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
              Prof. JVR
              <span className="block text-accent">Ravindra</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/80 font-light">
              Principal & Professor of ECE
            </p>
            <p className="text-lg text-primary-foreground/70">
              Vardhaman College of Engineering
              <br />
              Shamshabad, Telangana, India
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:jayanthi@ieee.org"
                className="flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
              <a 
                href="tel:+919440114765"
                className="flex items-center gap-2 px-5 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 9440114765
              </a>
            </div>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-2xl rotate-6 scale-105" />
              <img 
                src={professorPhoto} 
                alt="Prof. JVR Ravindra"
                className="relative w-72 lg:w-96 h-auto rounded-2xl shadow-2xl border-4 border-accent/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
