// Simple in-memory storage (resets on cold start)
// For production, consider using Vercel KV, MongoDB, or another database
let visitorData = {
  totalVisitors: 0,
  uniqueVisitors: [],
  visits: []
};

let kv = null;

// Initialize KV if available
const initKV = async () => {
  if (!kv) {
    try {
      const { kv: vercelKv } = await import('@vercel/kv');
      kv = vercelKv;
    } catch (e) {
      // Vercel KV not available, use in-memory storage
      console.log('Using in-memory storage (Vercel KV not configured)');
    }
  }
  return kv;
};

const readData = async () => {
  await initKV();
  if (kv) {
    try {
      const data = await kv.get('visitor-data');
      return data || { totalVisitors: 0, uniqueVisitors: [], visits: [] };
    } catch (error) {
      console.error('Error reading from KV:', error);
      return visitorData;
    }
  }
  return visitorData;
};

const writeData = async (data) => {
  await initKV();
  if (kv) {
    try {
      await kv.set('visitor-data', data);
    } catch (error) {
      console.error('Error writing to KV:', error);
    }
  } else {
    visitorData = data;
  }
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { visitorId } = req.body;
      const data = await readData();
      
      // Increment total visitors
      data.totalVisitors = (data.totalVisitors || 0) + 1;
      
      // Track unique visitors
      if (!data.uniqueVisitors) {
        data.uniqueVisitors = [];
      }
      
      if (visitorId && !data.uniqueVisitors.includes(visitorId)) {
        data.uniqueVisitors.push(visitorId);
      }
      
      // Add visit record
      if (!data.visits) {
        data.visits = [];
      }
      
      data.visits.push({
        timestamp: new Date().toISOString(),
        visitorId: visitorId || 'anonymous'
      });
      
      // Keep only last 1000 visits to prevent file from growing too large
      if (data.visits.length > 1000) {
        data.visits = data.visits.slice(-1000);
      }
      
      await writeData(data);
      
      res.status(200).json({
        totalVisitors: data.totalVisitors,
        uniqueVisitors: data.uniqueVisitors.length,
        success: true
      });
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
      res.status(500).json({ error: 'Failed to increment visitor count' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
