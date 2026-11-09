import Section from '@/components/Section';
import { BulletList } from '@/components/blocks';

const expertise = [
  'Outcome-Based Education and accreditation preparedness',
  'CO–PO–PSO mapping and attainment',
  'Bloom’s Taxonomy and assessment design',
  'Academic audits and continuous improvement',
  'Curriculum development and academic regulations',
  'Low-power VLSI and emerging computing architectures',
  'Research development and doctoral mentorship',
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
    intro="Contributing to faculty development through invited lectures, academic mentoring and sessions on teaching, assessment and quality assurance — with more than 14 guest lectures delivered for faculty members."
  >
    <div className="rounded-lg border border-border bg-card p-8">
      <h3 className="mb-6 font-heading text-2xl font-semibold text-foreground">
        Areas of Expertise for Invited Engagements
      </h3>
      <BulletList items={expertise} columns={2} />
    </div>

    <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
      Each engagement typically includes the talk title, host institution, date, audience,
      event brochure and photographs — documented under News &amp; Gallery.
    </p>
  </Section>
);

export default Talks;
