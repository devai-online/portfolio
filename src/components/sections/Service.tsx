import Section from '@/components/Section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { SimpleTable, BulletList, TagRow } from '@/components/blocks';

/* --- IEEE --- */
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

/* --- Invited Talks & FDP --- */
const expertise = [
  'Outcome-Based Education and accreditation preparedness',
  'CO–PO–PSO mapping and attainment',
  'Bloom’s Taxonomy and assessment design',
  'Academic audits and continuous improvement',
  'Curriculum development and academic regulations',
  'Low-power VLSI and emerging computing architectures',
  'Research development and doctoral mentorship',
];

/* --- Industry & Outreach --- */
const partners = [
  'MassMutual',
  'Evernorth Health Services',
  'ARK Infosolutions',
  'QNX',
  'Cadence',
  'RF Communications',
];
const initiatives = [
  'Wireless sensor networks for environmental monitoring and disaster response',
  'A low-cost foot therapy device for plantar fasciitis',
  'Science and mathematics teacher training using economical teaching aids',
  'Skill development through NSDC / PMKVY 4.0',
  'Community resilience initiatives across six blocks of Ranga Reddy district',
  'Innovation, entrepreneurship and intellectual property awareness',
];

const tabClass =
  'rounded-md px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground';

const Service = () => (
  <Section
    id="service"
    eyebrow="IEEE · Invited Talks · Industry & Outreach"
    title={
      <>
        Service to the <span className="text-muted-foreground">profession & society</span>
      </>
    }
    intro="Professional service spanning IEEE chapter leadership, faculty development, industry partnerships and societal outreach — strengthening technical communities and extending impact beyond the campus."
    alt
  >
    <Tabs defaultValue="ieee" className="w-full">
      <TabsList className="mb-8 flex h-auto flex-wrap justify-start gap-1">
        <TabsTrigger value="ieee" className={tabClass}>
          IEEE & Memberships
        </TabsTrigger>
        <TabsTrigger value="talks" className={tabClass}>
          Invited Talks & FDP
        </TabsTrigger>
        <TabsTrigger value="industry" className={tabClass}>
          Industry & Outreach
        </TabsTrigger>
      </TabsList>

      <TabsContent value="ieee" className="space-y-10">
        <div>
          <h3 className="mb-5 font-heading text-xl font-semibold text-foreground">
            IEEE Leadership Roles
          </h3>
          <SimpleTable headers={['Role', 'Period']} rows={roles} />
        </div>
        <div className="rounded-lg border border-border bg-background p-8">
          <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
            Professional Memberships
          </h3>
          <BulletList items={memberships} />
        </div>
      </TabsContent>

      <TabsContent value="talks" className="space-y-8">
        <p className="max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
          Contributing to faculty development through invited lectures, academic mentoring and
          sessions on teaching, assessment and quality assurance — with more than 14 guest
          lectures delivered for faculty members.
        </p>
        <div className="rounded-lg border border-border bg-background p-8">
          <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
            Areas of Expertise for Invited Engagements
          </h3>
          <BulletList items={expertise} columns={2} />
        </div>
      </TabsContent>

      <TabsContent value="industry" className="space-y-10">
        <div>
          <h3 className="mb-5 font-heading text-xl font-semibold text-foreground">
            Institutional Collaborations
          </h3>
          <TagRow tags={partners} />
        </div>
        <div className="rounded-lg border border-border bg-background p-8">
          <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
            Societal & Community-Oriented Initiatives
          </h3>
          <BulletList items={initiatives} columns={2} />
        </div>
      </TabsContent>
    </Tabs>
  </Section>
);

export default Service;
