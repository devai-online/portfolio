import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on every page change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="min-h-screen pt-16 lg:pl-72 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
