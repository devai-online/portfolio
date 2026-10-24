import Section from '@/components/Section';
import { InfoCardGrid, BulletList } from '@/components/blocks';
import { Target, BookOpen, Network, BarChart3, Gauge, GraduationCap } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Engineering Knowledge Profile',
    description:
      'Programme design mapped to the Washington Accord graduate attributes and complex engineering problem-solving.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Development',
    description:
      'Industry-aligned, competency-based curricula with flexible credit structures and emerging-technology electives.',
  },
  {
    icon: Network,
    title: 'Competency-Level CO–PO Mapping',
    description:
      'Granular mapping of Course Outcomes to Programme Outcomes at competency and performance-indicator level.',
  },
  {
    icon: BarChart3,
    title: 'Assessment & Attainment',
    description:
      'Direct and indirect assessment frameworks that quantify CO/PO attainment and drive data-informed revision.',
  },
  {
    icon: Gauge,
    title: 'Key Performance Indicators',
    description:
      'Academic KPIs for learning outcomes, pass rates, placements and research that inform institutional decisions.',
  },
  {
    icon: GraduationCap,
    title: 'Faculty Development',
    description:
      'Structured faculty development on OBE, assessment design and pedagogy to sustain teaching quality.',
  },
];

const principles = [
  'Learner-centred, outcome-driven programme design',
  'Alignment of assessments with intended learning outcomes',
  'Closed-loop attainment analysis feeding curriculum revision',
  'Evidence-based academic decision-making',
];

const Education = () => (
  <Section
    id="education"
    eyebrow="Outcome-Based Education & Academic Innovation"
    title={
      <>
        Outcomes you can <span className="text-muted-foreground">measure</span>
      </>
    }
    intro="A rigorous, outcome-based approach to engineering education — from the engineering knowledge profile through curriculum, assessment, attainment and continuous faculty development."
  >
    <InfoCardGrid cards={cards} />
    <div className="mt-12 rounded-lg border border-border bg-card p-8">
      <h3 className="mb-6 font-heading text-2xl text-foreground">Guiding Principles</h3>
      <BulletList items={principles} columns={2} />
    </div>
  </Section>
);

export default Education;
