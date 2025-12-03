import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold mb-2">
            Prof. JVR Ravindra
          </h3>
          <p className="text-primary-foreground/70 mb-6">
            Principal & Professor of ECE, Vardhaman College of Engineering
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:jayanthi@ieee.org"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              jayanthi@ieee.org
            </a>
            <a 
              href="tel:+919440114765"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9440114765
            </a>
            <a 
              href="https://www.jvrravindra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Globe className="w-5 h-5" />
              www.jvrravindra.com
            </a>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Prof. JVR Ravindra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
