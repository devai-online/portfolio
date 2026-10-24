import Section from '@/components/Section';
import { StatGrid, TagRow, InfoCardGrid } from '@/components/blocks';
import { FlaskConical, Handshake, FileCheck2, Cpu } from 'lucide-react';

const stats = [
  { value: '₹15Cr+', label: 'Research Funding' },
  { value: '20+', label: 'Funded Projects' },
  { value: '10+', label: 'Innovation Centres' },
  { value: '100+', label: 'Publications' },
];

const interests = [
  'VLSI Design',
  'Low-Power Computing',
  'AI / ML Hardware',
  'Quantum Technologies',
  'Reconfigurable Computing',
  'Embedded & IoT Systems',
  'Hardware Security',
];

const cards = [
  {
    icon: FlaskConical,
    title: 'Funded Projects',
    description:
      'Over 20 externally funded research and capacity-building projects totalling ₹15+ crore from national agencies and industry.',
  },
  {
    icon: Handshake,
    title: 'Collaborations',
    description:
      'Major academia–industry–government collaborations advancing translational research and technology development.',
  },
  {
    icon: FileCheck2,
    title: 'Patents & IP',
    description:
      'Patents and technology development outcomes arising from research in VLSI and emerging hardware systems.',
  },
  {
    icon: Cpu,
    title: 'Research Centres',
    description:
      'Established 10+ Research & Innovation Centres enabling interdisciplinary and sponsored research.',
  },
];

const Research = () => (
  <Section
    id="research"
    eyebrow="Research & Innovation · Publications"
    title={
      <>
        Research that <span className="text-muted-foreground">creates impact</span>
      </>
    }
    intro="Active research in VLSI and emerging technologies, supported by substantial external funding, strong collaborations, patents and a sustained record of scholarly publication."
    alt
  >
    <StatGrid stats={stats} />

    <div className="mt-12">
      <h3 className="mb-5 font-heading text-2xl text-foreground">Research Interests</h3>
      <TagRow tags={interests} />
    </div>

    <div className="mt-12">
      <InfoCardGrid cards={cards} columns={2} />
    </div>

    <div className="mt-12 rounded-lg border border-border bg-background p-8">
      <h3 className="mb-3 font-heading text-2xl text-foreground">
        Publications & Scholarly Contributions
      </h3>
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        A substantial body of work spanning peer-reviewed journal articles, international and
        national conference papers, books and book chapters — with DOI and publisher links
        maintained on scholarly indexing profiles.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="https://scholar.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Google Scholar
        </a>
        <a
          href="https://orcid.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          ORCID
        </a>
      </div>
    </div>
  </Section>
);

export default Research;
