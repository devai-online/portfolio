import React from "react";
import { useCFStats } from "@/hooks/useCFStats";
import { MapPin, Loader2, AlertCircle } from "lucide-react";

interface CFStatsByCountryProps {
  maxItems?: number;
  showLoading?: boolean;
  showError?: boolean;
}

const colorClasses = [
  'bg-accent',
  'bg-primary',
  'bg-secondary',
  'bg-muted-foreground',
  'bg-accent/80',
  'bg-primary/80',
];

export default function CFStatsByCountry({ 
  maxItems = 6,
  showLoading = true,
  showError = true 
}: CFStatsByCountryProps) {
  const { data, loading, error } = useCFStats();

  if (loading && showLoading) {
    return (
      <div className="flex items-center justify-center gap-2 text-muted-foreground py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Loading Cloudflare stats...</span>
      </div>
    );
  }

  if (error && showError) {
    return (
      <div className="flex items-center justify-center gap-2 text-destructive py-8">
        <AlertCircle className="w-5 h-5" />
        <span>Error loading stats: {error.message}</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>No data received from API</p>
      </div>
    );
  }

  if (!data.byCountry || Object.keys(data.byCountry).length === 0) {
    // Log what data we actually have
    console.log("CFStatsByCountry: No byCountry data. Available data:", JSON.stringify(data, null, 2));
    console.log("CFStatsByCountry: byCountry exists?", !!data.byCountry);
    console.log("CFStatsByCountry: byCountry type?", typeof data.byCountry);
    console.log("CFStatsByCountry: byCountry keys?", data.byCountry ? Object.keys(data.byCountry) : "null");
    console.log("CFStatsByCountry: byCountry length?", data.byCountry ? Object.keys(data.byCountry).length : 0);
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>No Cloudflare statistics available</p>
        <p className="text-xs mt-2">Check console for API response details</p>
      </div>
    );
  }

  const entries = Object.entries(data.byCountry)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxItems);
  
  const totalRequests = entries.reduce((sum, [, count]) => sum + count, 0);

  return (
    <div className="space-y-4">
      {entries.map(([country, count], index) => {
        const percentage = totalRequests > 0 ? (count / totalRequests) * 100 : 0;
        const colorClass = colorClasses[index % colorClasses.length];
        
        return (
          <div key={country}>
            <div className="flex justify-between text-sm mb-1">
              <span className="flex items-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                {country}
              </span>
              <span className="text-muted-foreground">
                {count.toLocaleString()} ({percentage.toFixed(1)}%)
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${colorClass} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${percentage}%`
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

