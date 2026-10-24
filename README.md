# Prof. JVR Ravindra — Portfolio Website

Portfolio website for Prof. JVR Ravindra, Principal & Professor of ECE at Vardhaman College of Engineering.

A fully static single-page application — no backend or API — designed for simple deployment to static hosts such as **Cloudflare Pages**.

## Technologies

- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn-ui primitives

## Getting Started

### Prerequisites

- Node.js & npm (or Bun)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Runs on `http://localhost:8080`.

## Available Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Build for production (output in `dist/`)
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

## Project Structure

```
src/
  components/
    Sidebar.tsx        Left navigation (fixed on desktop, drawer on mobile)
    Section.tsx        Shared section wrapper (eyebrow + heading + intro)
    blocks.tsx         Reusable content blocks (stats, cards, lists, timeline, tags)
    sections/          One file per page section (Home, About, Research, …)
    ui/                shadcn-ui primitives
  hooks/
    useActiveSection.ts  Highlights the current section in the sidebar
    useScrollAnimation.ts
  lib/
    sections.ts        Single source of truth for nav order, ids and labels
  pages/
    Index.tsx          Composes the sidebar + all sections
```

The site content is organised into the sections defined in `src/lib/sections.ts`:
Home · About & Academic Journey · Leadership & Governance · Accreditation & Quality ·
Outcome-Based Education · Research & Innovation · Teaching & Mentorship ·
IEEE & Professional Service · Invited Talks & FDP · Industry & Outreach ·
Honours & Recognition · Gallery · Contact & Collaboration.

## Deployment (Cloudflare Pages)

1. Connect the repository in the Cloudflare Pages dashboard.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. `public/_redirects` is included so client-side routing falls back to `index.html`.

The `dist/` folder is a self-contained static bundle and can be served by any static host.

## License

© 2025 Prof. JVR Ravindra. All rights reserved.
