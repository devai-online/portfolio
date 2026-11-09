import Section from '@/components/Section';
import { InfoCardGrid } from '@/components/blocks';
import { Target, Network, BarChart3, Gauge, Lightbulb } from 'lucide-react';

const cards = [
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

const Education = () => (
  <Section
    id="education"
    eyebrow="Outcome-Based Education & Academic Innovation"
    title={
      <>
        Outcomes you can <span className="text-muted-foreground">measure</span>
      </>
    }
    intro="Implementing Outcome-Based Education across successive NBA accreditation frameworks since 2009 — including Tier-II and Washington Accord-aligned Tier-I frameworks — connecting curriculum design, teaching, assessment and improvement to intended student learning outcomes."
  >
    <InfoCardGrid cards={cards} />

    <div className="mt-12 rounded-lg border border-border bg-card p-8">
      <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground">
        Faculty Mentoring
      </h3>
      <p className="max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
        I mentor faculty in curriculum delivery, learner engagement, assessment quality and
        the documentation of continuous improvement — translating OBE principles into everyday
        teaching practice.
      </p>
    </div>
  </Section>
);

export default Education;
