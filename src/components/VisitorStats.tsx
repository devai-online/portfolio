import { useCFStats } from '@/hooks/useCFStats';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import CFStatsByCountry from './CFStatsByCountry';

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
  const { data: cfData, loading: cfLoading } = useCFStats();
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  // Calculate total visits from Cloudflare data
  const totalVisits = cfData?.total || 
    cfData?.totalRequests || 
    (cfData?.byCountry ? Object.values(cfData.byCountry).reduce((sum, count) => sum + count, 0) : 0);

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
                {cfLoading ? (
                  <span className="text-2xl">Loading...</span>
                ) : (
                  <AnimatedCounter value={totalVisits} isVisible={isVisible} />
                )}
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
              
              <CFStatsByCountry maxItems={6} />
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Cloudflare Analytics - Last 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;
