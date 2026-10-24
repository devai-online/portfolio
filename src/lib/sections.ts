// Single source of truth for the pages: route path, sidebar label and short label.
// Used by both the Sidebar (navigation) and the router (App.tsx).

export interface NavItem {
  /** Route path, e.g. '/about'. Home is '/'. */
  path: string;
  /** Label shown in the sidebar. */
  label: string;
}

export const sections: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/leadership', label: 'Leadership & Governance' },
  { path: '/accreditation', label: 'Accreditation & Quality' },
  { path: '/education', label: 'Outcome-Based Education' },
  { path: '/research', label: 'Research & Innovation' },
  { path: '/teaching', label: 'Teaching & Mentorship' },
  { path: '/ieee', label: 'IEEE & Service' },
  { path: '/talks', label: 'Invited Talks & FDP' },
  { path: '/industry', label: 'Industry & Outreach' },
  { path: '/honours', label: 'Honours & Recognition' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];
