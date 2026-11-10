import Section from '@/components/Section';
import { StatGrid, TagRow, BulletList, SimpleTable } from '@/components/blocks';

const stats = [
  { value: '39', label: 'Journal Articles' },
  { value: '86', label: 'Conference Papers' },
  { value: '11', label: 'Funded Projects' },
  { value: '1', label: 'Authored Book' },
];

const interests = [
  'VLSI Design',
  'Low-Power & High-Speed Digital Design',
  'Interconnect Modelling',
  'Approximate Computing',
  'Cryptographic Hardware',
  'Network-on-Chip',
  'FPGA Acceleration',
  'Signal Processing',
  'Machine Learning',
  'Reversible Logic',
];

const themes = [
  'Low-power VLSI circuits and energy-efficient architectures',
  'Interconnect modelling, crosstalk analysis and model order reduction',
  'Approximate arithmetic and machine-learning-based circuit design',
  'Cryptographic hardware and resistance to power-analysis attacks',
  'Network-on-chip design and arbitration',
  'FPGA-based computation and acceleration',
  'Reversible logic and emerging computing techniques',
  'Machine learning applications in healthcare and engineering',
];

const projects = [
  ['DST–SEED–CRRC', 'Community Resilience Resource Centre, six blocks of Ranga Reddy district', '₹1.50 crore'],
  ['DST–TIDE', 'Low-cost foot therapy device for plantar fasciitis', '₹50.58 lakh'],
  ['DST–FIST', 'Humanoid Robotics Laboratory', '₹50.00 lakh'],
  ['DST–CSRI', 'SAMSED: ad hoc wireless sensor networks for disaster survivor detection', '₹41.98 lakh'],
  ['DST–NCSTC', 'Training science & mathematics teachers using economical teaching aids', '₹24.05 lakh'],
  ['DST–WOSA', 'Differential & Leakage Power Analysis Crypto System', '₹19.95 lakh'],
  ['NSDC / PMKVY 4.0', 'Skilling for job roles', '₹11.50 lakh'],
  ['DST–NEB', 'Innovation and Entrepreneurship Training Programme', '₹3.60 lakh'],
  ['AICTE–RPS', 'Routing algorithms for wireless sensor networks (environmental monitoring)', '₹3.10 lakh'],
  ['AICTE', 'IDEA Lab — Principal Investigator', 'Self-financed'],
  ['AICTE–KAPILA', 'Intellectual property literacy and awareness', 'Self-financed'],
];

const selectedPubs = [
  '“Accuracy evaluation of a trained neural network by energy efficient approximate 4:2 compressor.” Computers & Electrical Engineering, 2021.',
  '“Design and implementation of network-on-chip router using multi-priority based iterative round-robin matching with SLIP.” Transactions on Emerging Telecommunications Technologies, 2022.',
  '“Design and Implementation of Power-Efficient Cryptography Scheme Using a Novel Multiplication Technique.” Wireless Personal Communications, 2023.',
  '“Generic sub-space algorithm for generating reduced order models of linear time varying VLSI circuits.” ACM Great Lakes Symposium on VLSI, 2008.',
];

const Research = () => (
  <Section
    id="research"
    eyebrow="Research & Innovation · Publications"
    title={
      <>
        Research that <span className="text-muted-foreground">creates impact</span>
      </>
    }
    intro="Research interests span VLSI, low-power and high-speed digital design, interconnect modelling, approximate computing, cryptographic hardware, network-on-chip architectures, FPGA acceleration, signal processing and machine learning — supported by doctoral supervision, externally funded projects and scholarly publication."
    alt
  >
    <StatGrid stats={stats} />

    <div className="mt-12">
      <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
        Research Interests
      </h3>
      <TagRow tags={interests} />
    </div>

    <div className="mt-12 grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
          Selected Research Themes
        </h3>
        <BulletList items={themes} />
      </div>
      <div className="lg:col-span-6">
        <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
          Selected Publications
        </h3>
        <BulletList items={selectedPubs} />
      </div>
    </div>

    <div className="mt-12">
      <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
        Research & Development Projects
      </h3>
      <SimpleTable
        headers={['Scheme / Agency', 'Project or Initiative', 'Funding']}
        rows={projects}
      />
    </div>

    <div className="mt-12 rounded-lg border border-border bg-background p-8">
      <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground">Authored Book</h3>
      <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">
          Drone Technology: Future Trends and Practical Applications
        </span>{' '}
        — Sachi Nandan Mohanty, JVR Ravindra, G. Surya Narayana, Chinmaya Ranjan Pattnaik and
        Y. Mohamed Sirajudeen. John Wiley &amp; Sons, 2023.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="https://scholar.google.com/citations?user=y7lU3NAAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Google Scholar
        </a>
      </div>
    </div>
  </Section>
);

export default Research;
