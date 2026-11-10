// Single source of truth for the pages: route path, sidebar label and flags.
// Used by both the Sidebar (navigation) and the router (App.tsx).

export interface NavItem {
  /** Route path, e.g. '/about'. Home is '/'. */
  path: string;
  /** Label shown in the sidebar. */
  label: string;
  /** Render as a highlighted call-to-action (used for Contact). */
  highlight?: boolean;
}

// Seven consolidated sections (Home is reached via the name/logo).
export const sections: NavItem[] = [
  { path: '/about', label: 'About' },
  { path: '/leadership', label: 'Leadership' },
  { path: '/research', label: 'Research' },
  { path: '/teaching', label: 'Teaching & Mentorship' },
  { path: '/service', label: 'Service & Outreach' },
  { path: '/gallery', label: 'News & Gallery' },
  { path: '/contact', label: 'Contact', highlight: true },
];
