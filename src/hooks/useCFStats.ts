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
        console.log("Fetching Cloudflare stats from API (all-time data)...");
        
        // Request all-time data instead of last 24 hours
        // NOTE: Adjust these parameters based on your Cloudflare Workers API implementation
        // Common parameter patterns:
        // - range=all or period=all (for all-time data)
        // - since=<timestamp> (set to 0 or very old date for all-time)
        // - Or remove time filters entirely if API defaults to all-time
        const apiUrl = new URL("https://cf-analytics-api.aioperations-services.workers.dev");
        
        // Option 1: Try with range/period parameters
        apiUrl.searchParams.set("range", "all");
        apiUrl.searchParams.set("period", "all");
        
        // Option 2: If your API uses 'since', uncomment this and comment above:
        // apiUrl.searchParams.set("since", "0"); // 0 = beginning of time
        
        // Option 3: If your API has a different endpoint for all-time, modify the URL:
        // const apiUrl = new URL("https://cf-analytics-api.aioperations-services.workers.dev/alltime");
        
        const fullUrl = apiUrl.toString();
        console.log("API URL with parameters:", fullUrl);
        
        const res = await fetch(fullUrl);
        
        console.log("API Response Status:", res.status, res.statusText);
        
        if (!res.ok) {
          const errorText = await res.text().catch(() => "Unknown error");
          console.error("API Error Response:", errorText);
          throw new Error(`Failed to fetch stats: ${res.status} ${res.statusText}`);
        }
        
        const json = await res.json().catch((err) => {
          console.error("JSON Parse Error:", err);
          throw new Error("Invalid JSON response from API");
        });
        
        // Debug: log the API response to see what we're getting
        console.log("Cloudflare API Response:", JSON.stringify(json, null, 2));
        console.log("Response keys:", Object.keys(json));
        console.log("byCountry data:", json.byCountry);
        console.log("byCountry type:", typeof json.byCountry);
        console.log("byCountry keys:", json.byCountry ? Object.keys(json.byCountry) : "null/undefined");
        console.log("byCountry entries:", json.byCountry ? Object.entries(json.byCountry) : "null/undefined");
        
        setData(json);
      } catch (e) {
        console.error("Error fetching Cloudflare stats:", e);
        setError(e instanceof Error ? e : new Error("Unknown error occurred"));
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { data, loading, error };
}

