import Section from '@/components/Section';
import { InfoCardGrid } from '@/components/blocks';
import { Factory, Briefcase, GraduationCap, HeartHandshake, School } from 'lucide-react';

const cards = [
  {
    icon: Factory,
    title: 'Industry Partnerships',
    description:
      'Strategic partnerships and MoUs with technology companies enabling joint labs, internships and sponsored research.',
  },
  {
    icon: Briefcase,
    title: 'Consultancy',
    description:
      'Technical consultancy in VLSI and electronics systems, connecting academic expertise with industry needs.',
  },
  {
    icon: GraduationCap,
    title: 'Skill Development',
    description:
      'Skill development and certification initiatives that enhance employability and industry readiness of students.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Projects',
    description:
      'Societal outreach and community engagement projects applying technology for social good.',
  },
  {
    icon: School,
    title: 'School Outreach',
    description:
      'STEM awareness and school outreach programmes that inspire the next generation of engineers.',
  },
];

const Industry = () => (
  <Section
    id="industry"
    eyebrow="Industry Engagement & Societal Outreach"
    title={
      <>
        Bridging academia and <span className="text-muted-foreground">society</span>
      </>
    }
    intro="Deep engagement with industry and community — through partnerships, consultancy, skill development and outreach that extend the institution's impact beyond the classroom."
    alt
  >
    <InfoCardGrid cards={cards} />
  </Section>
);

export default Industry;
