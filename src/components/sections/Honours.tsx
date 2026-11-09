import Section from '@/components/Section';
import { Trophy } from 'lucide-react';

const honours = [
  { title: 'Visionary Leader Award', year: '21 March 2025' },
  { title: 'ESSV Fellow', year: '2024' },
  { title: 'Senior Member, IEEE', year: 'Conferred' },
  { title: 'Fellow, IETE', year: 'Conferred' },
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
    <div className="grid gap-5 sm:grid-cols-2">
      {honours.map((h) => (
        <div
          key={h.title}
          className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
        >
          <Trophy className="mt-1 h-6 w-6 shrink-0 text-accent" />
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground">{h.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{h.year}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Honours;
