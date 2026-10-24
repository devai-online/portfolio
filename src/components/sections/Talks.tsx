import Section from '@/components/Section';
import { InfoCardGrid } from '@/components/blocks';
import { Mic, Presentation, Users2, Wrench } from 'lucide-react';

const cards = [
  {
    icon: Mic,
    title: 'Keynotes',
    description:
      'Keynote addresses at national and international conferences on VLSI, outcome-based education and academic leadership.',
  },
  {
    icon: Presentation,
    title: 'Guest Lectures & Technical Talks',
    description:
      'Invited lectures at universities and institutions on emerging technologies, research methodology and quality assurance.',
  },
  {
    icon: Users2,
    title: 'Faculty Development Programmes',
    description:
      'Resource person for FDPs on OBE, accreditation, assessment design and research mentoring.',
  },
  {
    icon: Wrench,
    title: 'Workshops',
    description:
      'Hands-on workshops on VLSI design flows, EDA tools and competency-based curriculum development.',
  },
];

const Talks = () => (
  <Section
    id="talks"
    eyebrow="Invited Talks & Faculty Development"
    title={
      <>
        Sharing knowledge <span className="text-muted-foreground">widely</span>
      </>
    }
    intro="A sustained programme of keynotes, guest lectures, technical talks and faculty development sessions across the engineering education community."
  >
    <InfoCardGrid cards={cards} columns={2} />
  </Section>
);

export default Talks;
