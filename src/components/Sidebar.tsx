import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import professorPhoto from '@/assets/professor-photo.png';
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
        className="group flex flex-col items-center px-6 pb-8 pt-10 text-center"
      >
        <span className="mb-4 block h-20 w-20 overflow-hidden rounded-full border border-white/15 ring-1 ring-accent/40">
          <img
            src={professorPhoto}
            alt="Prof. JVR Ravindra"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </span>
        <span className="font-heading text-2xl leading-tight text-white">
          Prof. JVR Ravindra
        </span>
        <span className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-accent">
          Principal &amp; Professor, ECE
        </span>
      </button>

      <div className="mx-6 border-t border-white/10" />

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
                      ? 'bg-white/10 text-white'
                      : 'text-white/55 hover:bg-white/5 hover:text-white/90'
                  }`}
                >
                  <span
                    className={`h-4 w-px shrink-0 transition-colors duration-200 ${
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
      <div className="mx-6 border-t border-white/10" />
      <div className="space-y-2 px-6 py-6">
        <a
          href="mailto:jayanthi@ieee.org"
          className="flex items-center gap-3 text-xs text-white/55 transition-colors hover:text-accent"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          jayanthi@ieee.org
        </a>
        <a
          href="tel:+919440114765"
          className="flex items-center gap-3 text-xs text-white/55 transition-colors hover:text-accent"
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
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-primary px-5 lg:hidden">
        <span className="font-heading text-lg text-white">Prof. JVR Ravindra</span>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="p-2 text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 bg-primary lg:block">
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
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute inset-y-0 left-0 w-72 max-w-[85%] bg-primary shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 z-10 p-2 text-white/70 hover:text-white"
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
