import Section from '@/components/Section';
import { InfoCardGrid } from '@/components/blocks';
import { Award, CheckCircle2, ClipboardCheck, RefreshCw, Users } from 'lucide-react';

const cards = [
  {
    icon: Award,
    title: 'NBA Accreditation Leadership',
    description:
      'Led programme accreditation under NBA (Tier-I) aligned with the Washington Accord, embedding outcome-based assessment across departments.',
  },
  {
    icon: CheckCircle2,
    title: 'NAAC Peer Assessment',
    description:
      'Experienced NAAC assessor and institutional lead, driving quality benchmarking and evidence-based self-study across criteria.',
  },
  {
    icon: Users,
    title: 'UGC Committee Service',
    description:
      'Service on UGC and regulatory committees contributing to policy, academic standards and institutional review.',
  },
  {
    icon: ClipboardCheck,
    title: 'Academic Audits',
    description:
      'Institutionalised internal and external academic audits to monitor compliance, attainment and process integrity.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    description:
      'Closed-loop quality systems that translate audit findings and stakeholder feedback into measurable improvements.',
  },
];

const Accreditation = () => (
  <Section
    id="accreditation"
    eyebrow="Accreditation & Quality Assurance"
    title={
      <>
        Quality systems that <span className="text-muted-foreground">endure</span>
      </>
    }
    intro="Expertise in regulatory compliance and accreditation frameworks under NAAC, NBA (Tier-I) and the Washington Accord — with a sustained commitment to academic audit and continuous improvement."
    alt
  >
    <InfoCardGrid cards={cards} />
  </Section>
);

export default Accreditation;
