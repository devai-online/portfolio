import professorPhoto from '@/assets/professor-photo.png';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-primary relative flex items-center">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent ml-[10%] hidden lg:block" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-primary-foreground">
            <p 
              className="text-accent text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              SMIEEE • FIETE • FIE • SMACM
            </p>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading leading-[1.1] mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Prof. JVR
              <br />
              <span className="text-accent">Ravindra</span>
            </h1>
            
            <div 
              className="w-16 h-px bg-accent mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            />
            
            <div className="space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light">
                Principal & Professor of ECE
              </p>
              <p className="text-primary-foreground/60">
                Vardhaman College of Engineering
              </p>
              <p className="text-primary-foreground/60">
                Shamshabad, Telangana, India
              </p>
            </div>
            
            <div 
              className="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <a 
                href="mailto:jayanthi@ieee.org"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent/90"
              >
                Get in Touch
              </a>
              <a 
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-sm tracking-wider uppercase transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Photo */}
          <div 
            className="lg:col-span-5 flex justify-center lg:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/20" />
              <img 
                src={professorPhoto} 
                alt="Prof. JVR Ravindra"
                className="relative w-64 lg:w-80 h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-accent transition-colors group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;