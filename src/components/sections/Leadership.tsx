import Section from '@/components/Section';
import { InfoCardGrid, StatGrid, BulletList } from '@/components/blocks';
import { BookOpen, ScrollText, FlaskConical } from 'lucide-react';

const stats = [
  { value: '8+', label: 'Academic Regulations' },
  { value: '31', label: 'Institutional Policies' },
  { value: '24', label: 'Standard Procedures' },
  { value: '14', label: 'UG & PG Programmes' },
];

const cards = [
  {
    icon: BookOpen,
    title: 'Curriculum & Academic Reforms',
    description:
      'Developed and revised 8+ academic regulations and course structures across 8 UG and 6 PG programmes — enabling the Choice-Based Credit System, interdisciplinary learning, minor degrees, honours programmes and assessment reforms.',
  },
  {
    icon: ScrollText,
    title: 'Institutional Policies & Processes',
    description:
      'Led the formulation of 31 institutional policies and 24 Standard Operating Procedures spanning curriculum, faculty recruitment and promotion, research ethics, IP, innovation, incubation, student welfare, finance, inclusivity and sustainability.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Institutional Development',
    description:
      'Strengthened research standards, quality benchmarks and performance monitoring, and supported the establishment of VEC-CRIF as a Section 8 company in 2023 to reinforce the research and innovation ecosystem.',
  },
];

const policyAreas = [
  'Curriculum development, faculty recruitment and promotion',
  'Research ethics, seed funding, consultancy and intellectual property',
  'Innovation, incubation and student welfare',
  'Financial management and procurement',
  'Inclusivity and campus sustainability',
];

const Leadership = () => (
  <Section
    id="leadership"
    eyebrow="Academic Leadership & Governance"
    title={
      <>
        Leading institutions, <span className="text-muted-foreground">shaping policy</span>
      </>
    }
    intro="My leadership responsibilities encompass academic planning, institutional governance, faculty recruitment and appraisal, policy implementation, regulatory compliance and strategic development."
  >
    <StatGrid stats={stats} />

    <div className="mt-12">
      <InfoCardGrid cards={cards} />
    </div>

    <div className="mt-12 grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-6 rounded-lg border border-border bg-card p-8">
        <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
          Policy & SOP Coverage
        </h3>
        <BulletList items={policyAreas} />
      </div>
      <div className="lg:col-span-6 rounded-lg border border-border bg-card p-8">
        <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground">
          Institutional Standing
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
          These sustained efforts support Vardhaman's standing in the Times Higher Education
          World University Rankings 2027 and its consistent presence in the NIRF Engineering
          rank band — reflecting a commitment to research quality, academic excellence and
          institutional development. My responsibilities also span research infrastructure
          planning, student research support, industry partnerships and periodic reviews that
          guide continuous improvement.
        </p>
      </div>
    </div>
  </Section>
);

export default Leadership;
