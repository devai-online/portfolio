import Section from '@/components/Section';
import { Trophy } from 'lucide-react';

const honours = [
  {
    title: 'ET Industry Achievers Award',
    detail: 'Recognition for excellence in academic leadership and institutional development, 2024–25.',
  },
  {
    title: 'Times Education Excellence Award',
    detail: 'Honoured for outstanding contribution to engineering education and quality assurance.',
  },
  {
    title: 'Senior Member & Fellowships',
    detail: 'SMIEEE, SMACM, FIETE and FIE — recognising sustained professional distinction.',
  },
  {
    title: 'IEEE Leadership Recognition',
    detail: 'Acknowledged for chapter leadership, volunteer service and global committee contributions.',
  },
  {
    title: 'Research & Innovation Honours',
    detail: 'Recognition for funded research, patents and the growth of innovation centres.',
  },
  {
    title: 'Institutional Awards',
    detail: 'Multiple honours for governance reform, accreditation leadership and academic excellence.',
  },
];

const Honours = () => (
  <Section
    id="honours"
    eyebrow="Honours & Recognition"
    title={
      <>
        Recognised for <span className="text-muted-foreground">excellence</span>
      </>
    }
    intro="Fellowships, awards and professional recognitions earned across academic leadership, research and service to the profession."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {honours.map((h) => (
        <div
          key={h.title}
          className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
        >
          <Trophy className="mb-4 h-6 w-6 text-accent" />
          <h3 className="font-heading text-xl text-foreground">{h.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.detail}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Honours;
