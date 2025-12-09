import { useState, useEffect } from 'react';

const VISITOR_ID_KEY = 'portfolio_visitor_id';

// Generate or retrieve visitor ID
const getVisitorId = (): string => {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
};

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      try {
        const visitorId = getVisitorId();
        
        // First, get current count
        const countResponse = await fetch('/api/visitors');
        if (countResponse.ok) {
          const countData = await countResponse.json();
          setVisitorCount(countData.totalVisitors);
        }
        
        // Then increment (this will only count unique visitors)
        const incrementResponse = await fetch('/api/visitors/increment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ visitorId }),
        });
        
        if (incrementResponse.ok) {
          const incrementData = await incrementResponse.json();
          setVisitorCount(incrementData.totalVisitors);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to showing 0 if API fails
        setVisitorCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchAndIncrement();
  }, []);

  return visitorCount;
};