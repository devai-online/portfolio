import { useState, useEffect } from 'react';

const STORAGE_KEY = 'portfolio_visitor_count';
const VISITOR_ID_KEY = 'portfolio_visitor_id';

export const useVisitorCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem(STORAGE_KEY);
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Check if this visitor has been counted
    const visitorId = localStorage.getItem(VISITOR_ID_KEY);
    
    if (!visitorId) {
      // New visitor - increment count
      const newCount = currentCount + 1;
      localStorage.setItem(STORAGE_KEY, newCount.toString());
      localStorage.setItem(VISITOR_ID_KEY, Date.now().toString());
      setCount(newCount);
    } else {
      setCount(currentCount);
    }
  }, []);

  return count;
};
