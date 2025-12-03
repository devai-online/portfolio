import professorPhoto from '@/assets/professor-photo.png';
import { Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-primary relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 -translate-x-1/2 translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float" />
      <div className="absolute bottom-40 right-40 w-20 h-20 rounded-full bg-primary-foreground/5 animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground space-y-6">
            <div 
              className="inline-block px-4 py-2 bg-accent/20 rounded-full opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-accent text-sm font-medium tracking-wide">
                SMIEEE • FIETE • FIE • SMACM
              </span>
            </div>
            
            <h1 
              className="text-5xl lg:text-7xl font-heading font-bold leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Prof. JVR
              <span className="block text-accent">Ravindra</span>
            </h1>
            
            <p 
              className="text-xl lg:text-2xl text-primary-foreground/80 font-light opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Principal & Professor of ECE
            </p>
            <p 
              className="text-lg text-primary-foreground/70 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              Vardhaman College of Engineering
              <br />
              Shamshabad, Telangana, India
            </p>
            
            <div 
              className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              <a 
                href="mailto:jayanthi@ieee.org"
                className="group flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg transition-all duration-300 font-medium hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                Contact
              </a>
              <a 
                href="tel:+919440114765"
                className="group flex items-center gap-2 px-5 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
                +91 9440114765
              </a>
            </div>
          </div>
          
          {/* Photo */}
          <div 
            className="flex justify-center lg:justify-end opacity-0 animate-fade-in-right"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/30 rounded-2xl rotate-6 scale-105 transition-transform duration-500 group-hover:rotate-3" />
              <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl -rotate-3 scale-105 transition-transform duration-500 group-hover:-rotate-1" />
              <img 
                src={professorPhoto} 
                alt="Prof. JVR Ravindra"
                className="relative w-72 lg:w-96 h-auto rounded-2xl shadow-2xl border-4 border-accent/50 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
