import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = join(__dirname, 'visitor-data.json');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize data file if it doesn't exist
const initializeData = () => {
  if (!existsSync(DATA_FILE)) {
    const initialData = {
      totalVisitors: 0,
      uniqueVisitors: new Set(),
      visits: []
    };
    writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
};

// Read data from file
const readData = () => {
  try {
    const data = readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    // Convert uniqueVisitors array back to Set for processing
    return {
      ...parsed,
      uniqueVisitors: new Set(parsed.uniqueVisitors || [])
    };
  } catch (error) {
    return {
      totalVisitors: 0,
      uniqueVisitors: new Set(),
      visits: []
    };
  }
};

// Write data to file
const writeData = (data) => {
  const dataToWrite = {
    ...data,
    uniqueVisitors: Array.from(data.uniqueVisitors) // Convert Set to Array for JSON
  };
  writeFileSync(DATA_FILE, JSON.stringify(dataToWrite, null, 2));
};

// Get visitor count
app.get('/api/visitors', (req, res) => {
  try {
    const data = readData();
    res.json({
      totalVisitors: data.totalVisitors,
      uniqueVisitors: data.uniqueVisitors.size
    });
  } catch (error) {
    console.error('Error reading visitor data:', error);
    res.status(500).json({ error: 'Failed to read visitor data' });
  }
});

// Increment visitor count
app.post('/api/visitors/increment', (req, res) => {
  try {
    const { visitorId } = req.body;
    const data = readData();
    
    // Increment total visitors
    data.totalVisitors += 1;
    
    // Track unique visitors
    if (visitorId && !data.uniqueVisitors.has(visitorId)) {
      data.uniqueVisitors.add(visitorId);
    }
    
    // Add visit record
    data.visits.push({
      timestamp: new Date().toISOString(),
      visitorId: visitorId || 'anonymous'
    });
    
    // Keep only last 1000 visits to prevent file from growing too large
    if (data.visits.length > 1000) {
      data.visits = data.visits.slice(-1000);
    }
    
    writeData(data);
    
    res.json({
      totalVisitors: data.totalVisitors,
      uniqueVisitors: data.uniqueVisitors.size,
      success: true
    });
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    res.status(500).json({ error: 'Failed to increment visitor count' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize data on startup
initializeData();

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Visitor data stored in: ${DATA_FILE}`);
});

