import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { sections } from '@/lib/sections';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = sections.map((s) => s.id);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navContent = (
    <div className="flex h-full flex-col">
      {/* Identity */}
      <button
        onClick={() => handleNavClick('home')}
        className="px-6 pb-8 pt-10 text-left"
      >
        <span className="block font-heading text-xl font-semibold leading-tight text-foreground">
          Prof. JVR Ravindra
        </span>
        <span className="mt-2 block text-[0.68rem] font-medium uppercase tracking-[0.2em] text-accent">
          Principal &amp; Professor, ECE
        </span>
      </button>

      <div className="mx-6 border-t border-border" />

      {/* Navigation */}
      <nav className="scrollbar-slim flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-0.5">
          {sections.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center gap-3 rounded-md px-4 py-2.5 text-left text-[0.78rem] tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'bg-muted font-medium text-foreground'
                      : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                  }`}
                >
                  <span
                    className={`h-4 w-0.5 shrink-0 rounded-full transition-colors duration-200 ${
                      isActive ? 'bg-accent' : 'bg-transparent'
                    }`}
                  />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Contact footer */}
      <div className="mx-6 border-t border-border" />
      <div className="space-y-2 px-6 py-6">
        <a
          href="mailto:jayanthi@ieee.org"
          className="flex items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          jayanthi@ieee.org
        </a>
        <a
          href="tel:+919440114765"
          className="flex items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" />
          +91 94401 14765
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background px-5 lg:hidden">
        <span className="font-heading text-base font-semibold text-foreground">
          Prof. JVR Ravindra
        </span>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="p-2 text-foreground"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border bg-card lg:block">
        {navContent}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${isOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-foreground/30 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute inset-y-0 left-0 w-72 max-w-[85%] border-r border-border bg-card shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 z-10 p-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          {navContent}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
