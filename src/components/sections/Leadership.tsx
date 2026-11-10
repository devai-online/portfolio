import Section from '@/components/Section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { StatGrid, InfoCardGrid, BulletList } from '@/components/blocks';
import {
  BookOpen,
  ScrollText,
  FlaskConical,
  Award,
  Users,
  ClipboardCheck,
  Target,
  Network,
  BarChart3,
  Gauge,
  Lightbulb,
} from 'lucide-react';

/* --- Governance --- */
const govStats = [
  { value: '8+', label: 'Academic Regulations' },
  { value: '31', label: 'Institutional Policies' },
  { value: '24', label: 'Standard Procedures' },
  { value: '14', label: 'UG & PG Programmes' },
];
const govCards = [
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
      'Led the formulation of 31 institutional policies and 24 Standard Operating Procedures spanning curriculum, faculty recruitment, research ethics, IP, innovation, incubation, student welfare, finance, inclusivity and sustainability.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Institutional Development',
    description:
      'Strengthened research standards, quality benchmarks and performance monitoring, and supported the establishment of VEC-CRIF as a Section 8 company in 2023 to reinforce the research and innovation ecosystem.',
  },
];

/* --- Accreditation & Quality --- */
const accCards = [
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
      'NAAC Peer Team Member — institutional peer assessment, academic and administrative review and evidence verification. UGC Committee Member — external evaluation of governance, compliance and quality.',
  },
  {
    icon: ClipboardCheck,
    title: 'Academic Audits & Continuous Improvement',
    description:
      'Review of course files, assessment instruments, laboratories, projects, internships and student progression — with corrective measures tracked through documented Action Taken Reports.',
  },
];
const accMilestones = [
  'NAAC Cycle-II: A++ (CGPA 3.58/4.00)',
  'NAAC Cycle-I: A (CGPA 3.24/4.00)',
  'NBA accreditation for UG & PG programmes',
  'UGC autonomous status',
  'NIRF, ARIIA and Times Higher Education rankings',
];

/* --- Outcome-Based Education --- */
const obeCards = [
  {
    icon: Target,
    title: 'Engineering Knowledge Profile',
    description:
      'Reviewing curriculum breadth and depth across mathematics, sciences, engineering fundamentals, specialist knowledge, design, practice and societal context.',
  },
  {
    icon: Network,
    title: 'Outcome Alignment',
    description:
      'Developing and reviewing Course Outcomes, Programme Outcomes, Programme Specific Outcomes and competency-level mapping using relevant performance indicators.',
  },
  {
    icon: BarChart3,
    title: 'Assessment Design',
    description:
      'Strengthening direct and indirect assessment, Bloom’s Taxonomy alignment and rubric-based evaluation.',
  },
  {
    icon: Gauge,
    title: 'Attainment Analysis',
    description:
      'Reviewing course and programme attainment, setting targets, identifying gaps and monitoring corrective measures.',
  },
  {
    icon: BarChart3,
    title: 'Academic Performance Indicators',
    description:
      'Monitoring student performance, progression, graduation, placement and higher-education outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Teaching Innovation',
    description:
      'Promoting student-centred, experiential and project-based learning, including Engineering Design Thinking and Universal Human Values.',
  },
];

const tabClass =
  'rounded-md px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground';

const Leadership = () => (
  <Section
    id="leadership"
    eyebrow="Academic Leadership & Governance"
    title={
      <>
        Leading institutions, <span className="text-muted-foreground">shaping policy</span>
      </>
    }
    intro="Leadership spanning academic planning, institutional governance, accreditation and outcome-based education — driving institutional development, quality assurance and strategic growth."
  >
    <Tabs defaultValue="governance" className="w-full">
      <TabsList className="mb-8 flex h-auto flex-wrap justify-start gap-1">
        <TabsTrigger value="governance" className={tabClass}>
          Governance
        </TabsTrigger>
        <TabsTrigger value="accreditation" className={tabClass}>
          Accreditation & Quality
        </TabsTrigger>
        <TabsTrigger value="obe" className={tabClass}>
          Outcome-Based Education
        </TabsTrigger>
      </TabsList>

      <TabsContent value="governance" className="space-y-10">
        <StatGrid stats={govStats} />
        <InfoCardGrid cards={govCards} />
        <div className="rounded-lg border border-border bg-card p-8">
          <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
            Institutional Standing
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            These sustained efforts support Vardhaman's standing in the Times Higher Education
            World University Rankings 2027 and its consistent presence in the NIRF Engineering
            rank band — reflecting a commitment to research quality, academic excellence and
            institutional development.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="accreditation" className="space-y-10">
        <InfoCardGrid cards={accCards} />
        <div className="rounded-lg border border-border bg-card p-8">
          <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
            Accreditation & Ranking Milestones
          </h3>
          <BulletList items={accMilestones} columns={2} />
        </div>
      </TabsContent>

      <TabsContent value="obe" className="space-y-10">
        <p className="max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
          Implementing Outcome-Based Education across successive NBA accreditation frameworks
          since 2009 — including Tier-II and Washington Accord-aligned Tier-I frameworks —
          connecting curriculum design, teaching, assessment and improvement to intended
          student learning outcomes.
        </p>
        <InfoCardGrid cards={obeCards} />
      </TabsContent>
    </Tabs>
  </Section>
);

export default Leadership;
