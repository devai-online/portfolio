import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading leading-tight mb-6">
              Get in
              <br />
              <span className="text-accent">Touch</span>
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed">
              Principal & Professor of ECE
              <br />
              Vardhaman College of Engineering
            </p>
          </div>
          
          {/* Right column - Contact info */}
          <div className="lg:col-span-7 lg:pt-12">
            <div className="space-y-6">
              <a 
                href="mailto:jayanthi@ieee.org"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-1">Email</p>
                  <p className="text-primary-foreground group-hover:text-accent transition-colors">
                    jayanthi@ieee.org
                  </p>
                </div>
              </a>
              
              <a 
                href="tel:+919440114765"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-1">Phone</p>
                  <p className="text-primary-foreground group-hover:text-accent transition-colors">
                    +91 9440114765
                  </p>
                </div>
              </a>
              
              <a 
                href="https://www.jvrravindra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-1">Website</p>
                  <p className="text-primary-foreground group-hover:text-accent transition-colors">
                    www.jvrravindra.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Prof. JVR Ravindra
          </p>
          <p className="text-primary-foreground/40 text-sm">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;