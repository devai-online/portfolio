import Section from '@/components/Section';
import { BulletList } from '@/components/blocks';

const positions = [
  'Chair, IEEE CAS/EDS Joint Chapter (2025–26)',
  'Founding Advisor, IEEE-HKN Nu Kappa Chapter',
  'Organised 40+ IEEE international and national events',
  'Represented India on multiple global IEEE committees',
  'Leadership across IEEE CAS, EDS, Education Society, Computer Society and Sensors Council',
  'Governance frameworks for ethics, leadership development and chapter sustainability',
];

const memberships = [
  'Senior Member, IEEE (SMIEEE)',
  'Senior Member, ACM (SMACM)',
  'Fellow, IETE (FIETE)',
  'Fellow, Institution of Engineers (FIE)',
  'Reviewer and technical committee member for IEEE conferences',
  'IEEE-HKN honour society mentorship',
];

const Ieee = () => (
  <Section
    id="ieee"
    eyebrow="IEEE Leadership & Professional Service"
    title={
      <>
        Service to the <span className="text-muted-foreground">profession</span>
      </>
    }
    intro="Sustained leadership within IEEE and professional bodies — strengthening organisational structures, advancing policy alignment and expanding global community engagement."
    alt
  >
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="rounded-lg border border-border bg-background p-8">
        <h3 className="mb-6 font-heading text-2xl text-foreground">Leadership Positions</h3>
        <BulletList items={positions} />
      </div>
      <div className="rounded-lg border border-border bg-background p-8">
        <h3 className="mb-6 font-heading text-2xl text-foreground">
          Memberships & Professional Service
        </h3>
        <BulletList items={memberships} />
      </div>
    </div>
  </Section>
);

export default Ieee;
