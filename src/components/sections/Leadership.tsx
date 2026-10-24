import Section from '@/components/Section';
import { InfoCardGrid } from '@/components/blocks';
import { Building2, Compass, ScrollText, Lightbulb, ShieldCheck } from 'lucide-react';

const cards = [
  {
    icon: Building2,
    title: 'Principal & Dean Roles',
    description:
      'Executive academic leadership of an autonomous engineering institution, directing faculties, departments and administration toward shared goals.',
  },
  {
    icon: Compass,
    title: 'Strategic Planning',
    description:
      'Long-term institutional vision, growth roadmaps and resource planning aligned with national education policy and emerging technology needs.',
  },
  {
    icon: Building2,
    title: 'Institutional Development',
    description:
      'Infrastructure, academic programmes and centres of excellence that elevate the institution\'s standing and student outcomes.',
  },
  {
    icon: ScrollText,
    title: 'Academic Regulations',
    description:
      'Modern, outcome-oriented academic regulations and policies governing curriculum, examinations, and student progression.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance Reforms',
    description:
      'Over 30 governance reforms enhancing accountability, transparency, ethics and an innovation-driven academic culture.',
  },
  {
    icon: Lightbulb,
    title: 'Policies & Initiatives',
    description:
      'Faculty development, research promotion and student welfare initiatives that institutionalise a culture of excellence.',
  },
];

const Leadership = () => (
  <Section
    id="leadership"
    eyebrow="Academic Leadership & Governance"
    title={
      <>
        Leading institutions, <span className="text-muted-foreground">shaping policy</span>
      </>
    }
    intro="Visionary leadership across Principal and Dean roles — driving institutional development, strategic planning and strong academic governance frameworks."
  >
    <InfoCardGrid cards={cards} />
  </Section>
);

export default Leadership;
