import Section from '@/components/Section';
import { BulletList, Timeline } from '@/components/blocks';

const qualifications = [
  'Ph.D. in Electronics & Communication Engineering (VLSI Design)',
  'M.Tech. in VLSI System Design',
  'B.Tech. in Electronics & Communication Engineering',
  'Senior Member — IEEE (SMIEEE), ACM (SMACM)',
  'Fellow — IETE (FIETE) and Institution of Engineers (FIE)',
];

const milestones = [
  {
    period: 'Present',
    title: 'Principal & Professor of ECE',
    detail:
      'Leading Vardhaman College of Engineering with a focus on academic excellence, accreditation and research-driven growth.',
  },
  {
    period: 'Leadership',
    title: 'Dean & Senior Academic Roles',
    detail:
      'Shaped institutional strategy, academic regulations and quality systems across multiple leadership positions.',
  },
  {
    period: 'Research',
    title: 'VLSI & Emerging Technologies',
    detail:
      'Established research centres and secured major funded projects in low-power computing, AI/ML hardware and quantum technologies.',
  },
  {
    period: 'Profession',
    title: 'IEEE Leadership',
    detail:
      'Sustained service across IEEE societies, chapters and IEEE-HKN, representing India on global committees.',
  },
];

const About = () => (
  <Section
    id="about"
    eyebrow="About & Academic Journey"
    title={
      <>
        A career built on <span className="text-muted-foreground">academic leadership</span>
      </>
    }
    intro="An accomplished academic leader with over two decades of experience in institutional governance, strategic planning and systems-level academic management — committed to strengthening engineering education and research."
    alt
  >
    <div className="grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h3 className="mb-5 font-heading text-2xl text-foreground">Biography</h3>
        <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            As Principal of Vardhaman College of Engineering, Prof. JVR Ravindra provides
            visionary leadership that has strengthened the institution's national standing in
            engineering education. His work spans governance reform, outcome-based education,
            accreditation, and the growth of a vibrant research and innovation ecosystem.
          </p>
          <p>
            His technical expertise lies in VLSI design, low-power computing, AI/ML hardware and
            quantum technologies, supported by externally funded research and strong
            academia–industry–government collaborations.
          </p>
        </div>

        <h3 className="mb-5 mt-12 font-heading text-2xl text-foreground">
          Qualifications & Memberships
        </h3>
        <BulletList items={qualifications} />

        <div className="mt-12 border-l-2 border-accent bg-background p-6">
          <p className="font-heading text-xl italic leading-relaxed text-foreground">
            “Education is most powerful when it couples academic rigour with ethical
            leadership, measurable outcomes and a culture of continuous improvement.”
          </p>
          <p className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">
            Professional Philosophy
          </p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <h3 className="mb-7 font-heading text-2xl text-foreground">Career Milestones</h3>
        <Timeline items={milestones} />
      </div>
    </div>
  </Section>
);

export default About;
