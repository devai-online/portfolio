import Section from '@/components/Section';
import { InfoCardGrid, BulletList } from '@/components/blocks';
import { Award, Users, ClipboardCheck } from 'lucide-react';

const cards = [
  {
    icon: Award,
    title: 'Institutional Accreditation Leadership',
    description:
      'NAAC Cycle-I: A grade (CGPA 3.24/4.00). NAAC Cycle-II: A++ grade (CGPA 3.58/4.00). NBA accreditation and reaccreditation for UG and PG programmes, plus continuation of UGC autonomous status.',
  },
  {
    icon: Users,
    title: 'External Assessment Service',
    description:
      'NAAC Peer Team Member — institutional peer assessment, academic and administrative review and evidence verification. UGC Committee Member — external academic and institutional evaluation of governance, compliance and quality.',
  },
  {
    icon: ClipboardCheck,
    title: 'Academic Audits & Continuous Improvement',
    description:
      'Review of course files, assessment instruments, laboratories, projects, internships, faculty contributions and student progression — with corrective measures tracked through documented Action Taken Reports.',
  },
];

const rankings = [
  'NAAC Cycle-II: A++ (CGPA 3.58/4.00)',
  'NAAC Cycle-I: A (CGPA 3.24/4.00)',
  'NBA accreditation for UG & PG programmes',
  'UGC autonomous status',
  'NIRF, ARIIA and Times Higher Education rankings',
];

const Accreditation = () => (
  <Section
    id="accreditation"
    eyebrow="Accreditation & Quality Assurance"
    title={
      <>
        Quality systems that <span className="text-muted-foreground">endure</span>
      </>
    }
    intro="Experience in accreditation and quality assurance spanning institutional leadership, programme-level preparedness, external peer assessment, academic audits and continuous improvement."
    alt
  >
    <InfoCardGrid cards={cards} />

    <div className="mt-12 rounded-lg border border-border bg-background p-8">
      <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
        Accreditation & Ranking Milestones
      </h3>
      <BulletList items={rankings} columns={2} />
    </div>
  </Section>
);

export default Accreditation;
