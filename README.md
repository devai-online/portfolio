# Prof. JVR Ravindra - Portfolio Website

Portfolio website for Prof. JVR Ravindra, Principal & Professor of ECE at Vardhaman College of Engineering.

## Project Structure

This is a monorepo containing:
- **Frontend**: React + Vite application
- **Backend**: Express.js API server for visitor tracking

## Technologies Used

### Frontend
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Backend
- Node.js
- Express
- File-based storage for visitor data

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Install all dependencies (root and backend)
npm run install:all
```

Or manually:
```sh
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Development

Run both frontend and backend together:

```sh
npm run dev
```

This will start:
- Frontend on `http://localhost:8080`
- Backend API on `http://localhost:3001`

Or run them separately:

```sh
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

## Available Scripts

### Root Scripts
- `npm run dev` - Start both frontend and backend concurrently
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run install:all` - Install all dependencies

### Backend Scripts
- `cd backend && npm run dev` - Start backend with watch mode
- `cd backend && npm start` - Start backend in production mode

## API Endpoints

### GET `/api/visitors`
Get current visitor count
```json
{
  "totalVisitors": 1234,
  "uniqueVisitors": 567
}
```

### POST `/api/visitors/increment`
Increment visitor count (tracks unique visitors)
```json
{
  "visitorId": "visitor_1234567890_abc123"
}
```

### GET `/api/health`
Health check endpoint

## Features

- Responsive design
- Smooth scroll animations
- Real-time visitor counter with backend tracking
- Cloudflare Analytics integration
- Contact information
- Professional portfolio sections

## Data Storage

Visitor data is stored in `backend/visitor-data.json`. This file is automatically created and should be added to `.gitignore` (already configured).

## Deployment

### Frontend
Build the frontend:
```sh
npm run build
```

The `dist` folder contains the production build.

### Backend
The backend can be deployed to any Node.js hosting service. Make sure to:
1. Set the `PORT` environment variable if needed
2. Ensure write permissions for the `visitor-data.json` file
3. Use a proper database in production (currently using file-based storage)

## License

© 2025 Prof. JVR Ravindra. All rights reserved.
