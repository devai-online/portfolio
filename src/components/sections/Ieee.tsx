import Section from '@/components/Section';
import { SimpleTable, BulletList } from '@/components/blocks';

const roles = [
  ['Chair, IEEE CAS/EDS Joint Chapter, Hyderabad Section', '2026 – present'],
  ['IEEE Student Branch Counselor', '2025 – present'],
  ['Founding Faculty Advisor, IEEE-HKN Nu Kappa Chapter', '2024 – present'],
  ['Vice-Chair, IEEE Industrial Electronics Society Chapter', '2022 – 2023'],
];

const memberships = [
  'Senior Member, IEEE',
  'Fellow, Institution of Electronics & Telecommunication Engineers (IETE)',
  'Member, Association for Computing Machinery (ACM)',
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
    intro="Professional service spanning IEEE chapter leadership, student mentoring, technical activities and engagement with engineering communities — focused on technical learning, student participation and faculty development."
    alt
  >
    <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
      IEEE Leadership Roles
    </h3>
    <SimpleTable headers={['Role', 'Period']} rows={roles} />

    <div className="mt-12 rounded-lg border border-border bg-background p-8">
      <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
        Professional Memberships
      </h3>
      <BulletList items={memberships} />
    </div>
  </Section>
);

export default Ieee;
