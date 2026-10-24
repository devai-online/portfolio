// Single source of truth for the section order, ids and sidebar labels.
// Used by both the Sidebar (navigation) and the page layout.

export interface NavItem {
  id: string;
  label: string;
}

export const sections: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'leadership', label: 'Leadership & Governance' },
  { id: 'accreditation', label: 'Accreditation & Quality' },
  { id: 'education', label: 'Outcome-Based Education' },
  { id: 'research', label: 'Research & Innovation' },
  { id: 'teaching', label: 'Teaching & Mentorship' },
  { id: 'ieee', label: 'IEEE & Professional Service' },
  { id: 'talks', label: 'Invited Talks & FDP' },
  { id: 'industry', label: 'Industry & Outreach' },
  { id: 'honours', label: 'Honours & Recognition' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];
