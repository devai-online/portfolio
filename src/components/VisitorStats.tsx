import { useVisitorCounter } from '@/hooks/useVisitorCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Mock regional data (can be replaced with real data from backend later)
const mockRegionStats = [
  { region: 'India', percentage: 65 },
  { region: 'USA', percentage: 15 },
  { region: 'Europe', percentage: 12 },
  { region: 'Others', percentage: 8 },
];

const VisitorStats = () => {
  const visitorCount = useVisitorCounter();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const topRegions = mockRegionStats.slice(0, 4);

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Visitor count */}
          <div 
            className={`text-center lg:text-left transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-5xl lg:text-6xl font-heading text-foreground mb-2">
              {visitorCount.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground tracking-wider uppercase">
              Total Visitors
            </p>
          </div>
          
          {/* Divider */}
          <div className="hidden lg:block w-px h-20 bg-border" />
          
          {/* Regional stats */}
          <div 
            className={`flex flex-wrap justify-center gap-8 lg:gap-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {topRegions.map((region, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-heading text-foreground mb-1">
                  {region.percentage}%
                </p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">
                  {region.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;