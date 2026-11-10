import type { RouteRecord } from 'vite-react-ssg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

import Layout from '@/components/Layout';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Leadership from '@/components/sections/Leadership';
import Research from '@/components/sections/Research';
import Teaching from '@/components/sections/Teaching';
import Service from '@/components/sections/Service';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

// App-wide providers wrapped around the sidebar Layout (which renders <Outlet/>).
const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Layout />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Providers />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'leadership', element: <Leadership /> },
      { path: 'research', element: <Research /> },
      { path: 'teaching', element: <Teaching /> },
      { path: 'service', element: <Service /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
