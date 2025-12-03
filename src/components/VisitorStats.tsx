import { useVisitorCounter } from '@/hooks/useVisitorCounter';
import { Eye, Globe, MapPin } from 'lucide-react';

// Mock regional data - you can replace this with real data later
const mockRegions = [
  { region: 'India', percentage: 65, color: 'bg-accent' },
  { region: 'United States', percentage: 15, color: 'bg-primary' },
  { region: 'Europe', percentage: 12, color: 'bg-secondary' },
  { region: 'Others', percentage: 8, color: 'bg-muted-foreground' },
];

const VisitorStats = () => {
  const visitorCount = useVisitorCounter();

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-4">
            Site <span className="text-accent">Statistics</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Tracking engagement and reach across the globe
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visitor Counter */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-6xl lg:text-7xl font-heading font-bold text-foreground mb-2 animate-count-up">
                {visitorCount.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-lg">Total Site Visits</p>
            </div>
            
            {/* Regional Distribution */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full">
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
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
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
