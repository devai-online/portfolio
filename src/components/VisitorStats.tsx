import { useVisitorCounter } from '@/hooks/useVisitorCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, Globe, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

// Mock regional data - you can replace this with real data later
const mockRegions = [
  { region: 'India', percentage: 65, color: 'bg-accent' },
  { region: 'United States', percentage: 15, color: 'bg-primary' },
  { region: 'Europe', percentage: 12, color: 'bg-secondary' },
  { region: 'Others', percentage: 8, color: 'bg-muted-foreground' },
];

const AnimatedCounter = ({ value, isVisible }: { value: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <>{count.toLocaleString()}</>;
};

const VisitorStats = () => {
  const visitorCount = useVisitorCounter();
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setBarsAnimated(true), 300);
    }
  }, [isVisible]);

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Site <span className="text-accent">Statistics</span>
            </h2>
            <p className="text-muted-foreground">
              Tracking engagement and reach across the globe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visitor Counter */}
            <div 
              className={`group bg-card border border-border rounded-2xl p-8 text-center transition-all duration-700 hover:shadow-xl hover:border-accent/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-6xl lg:text-7xl font-heading font-bold text-foreground mb-2">
                <AnimatedCounter value={visitorCount} isVisible={isVisible} />
              </p>
              <p className="text-muted-foreground text-lg">Total Site Visits</p>
            </div>
            
            {/* Regional Distribution */}
            <div 
              className={`group bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:shadow-xl hover:border-accent/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Regional Distribution
                </h3>
              </div>
              
              <div className="space-y-4">
                {mockRegions.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-2 text-foreground">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        {item.region}
                      </span>
                      <span className="text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: barsAnimated ? `${item.percentage}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                *Mock data - Connect backend for real statistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;
