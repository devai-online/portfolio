import './index.css';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';

// ViteReactSSG wires up the router, server-side pre-rendering and client hydration.
export const createRoot = ViteReactSSG({ routes });
