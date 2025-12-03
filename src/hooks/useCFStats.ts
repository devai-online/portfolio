import { useEffect, useState } from "react";

interface CFStatsData {
  byCountry?: Record<string, number>;
  total?: number;
  totalRequests?: number;
  [key: string]: unknown;
}

interface UseCFStatsReturn {
  data: CFStatsData | null;
  loading: boolean;
  error: Error | null;
}

export function useCFStats(): UseCFStatsReturn {
  const [data, setData] = useState<CFStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://cf-analytics-api.aioperations-services.workers.dev");
        
        if (!res.ok) {
          throw new Error(`Failed to fetch stats: ${res.status} ${res.statusText}`);
        }
        
        const json = await res.json().catch(() => {
          throw new Error("Invalid JSON response from API");
        });
        
        // Debug: log the API response to see what we're getting
        console.log("Cloudflare API Response:", json);
        
        setData(json);
      } catch (e) {
        setError(e instanceof Error ? e : new Error("Unknown error occurred"));
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { data, loading, error };
}

