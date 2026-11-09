import Section from '@/components/Section';
import { TagRow, BulletList } from '@/components/blocks';

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

const Industry = () => (
  <Section
    id="industry"
    eyebrow="Industry Engagement & Societal Outreach"
    title={
      <>
        Bridging academia and <span className="text-muted-foreground">society</span>
      </>
    }
    intro="Strengthening industry–academia engagement through partnerships that support specialised laboratories, industry-aligned training, faculty development, student projects and collaborative research."
    alt
  >
    <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
      Institutional Collaborations
    </h3>
    <TagRow tags={partners} />

    <div className="mt-12 rounded-lg border border-border bg-background p-8">
      <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
        Societal & Community-Oriented Initiatives
      </h3>
      <BulletList items={initiatives} columns={2} />
    </div>
  </Section>
);

export default Industry;
