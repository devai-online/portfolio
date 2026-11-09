import Section from '@/components/Section';
import { Timeline, SimpleTable } from '@/components/blocks';

const qualifications = [
  [
    'Ph.D. in ECE (VLSI)',
    'IIIT Hyderabad — Centre for VLSI & Embedded Systems Technologies',
    '2004–2010',
  ],
  ['M.E. in Systems & Signal Processing', 'Osmania University, Hyderabad', '2001–2003'],
  ['M.Tech. in Data Science & Engineering (pursuing)', 'BITS, Hyderabad', '2025–2027'],
  ['B.E. in Electronics & Communication Engineering', 'Osmania University, Hyderabad', '1995–1999'],
];

const milestones = [
  {
    period: '2020 – present',
    title: 'Principal, Vardhaman College of Engineering',
    detail:
      'Leading academic and administrative initiatives across curriculum, accreditation, research, industry engagement and student development.',
  },
  {
    period: '2014 – 2020',
    title: 'Dean of Academics, Vardhaman College of Engineering',
    detail:
      'Guided curriculum reforms, strengthened assessment practices and mentored faculty and research scholars.',
  },
  {
    period: 'Since 1999',
    title: 'Teaching & Academic Responsibilities',
    detail:
      'Undergraduate and postgraduate engineering education, alongside VLSI research and professional service with NAAC and UGC.',
  },
];

const About = () => (
  <Section
    id="about"
    eyebrow="About & Academic Journey"
    title={
      <>
        An academic career <span className="text-muted-foreground">since 1999</span>
      </>
    }
    intro="An academic administrator and Professor of Electronics and Communication Engineering, presently serving as Principal of Vardhaman College of Engineering — combining engineering education, VLSI research, academic governance, institutional assessment and professional service."
    alt
  >
    <div className="grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">
          Professional Biography
        </h3>
        <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            My professional journey combines engineering education, VLSI research, academic
            governance, institutional assessment and professional service. I have served as
            Principal and Dean of Academics — guiding curriculum reforms, strengthening
            assessment practices, mentoring faculty and research scholars, and supporting
            institutional accreditation and development.
          </p>
          <p>
            Through external service with NAAC and UGC, I have also contributed to academic
            review, evidence verification and institutional quality assessment.
          </p>
        </div>

        <h3 className="mb-5 mt-12 font-heading text-2xl font-semibold text-foreground">
          Educational Qualifications
        </h3>
        <SimpleTable headers={['Qualification', 'Institution', 'Period']} rows={qualifications} />

        <div className="mt-12 border-l-2 border-accent bg-background p-6">
          <p className="text-lg italic leading-relaxed text-foreground">
            “My approach to academic leadership centres on clear academic processes, meaningful
            learning outcomes, responsible research and continuous improvement — emphasising
            faculty mentoring, student participation and the use of evidence to guide
            institutional decisions.”
          </p>
          <p className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">
            Professional Approach
          </p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <h3 className="mb-7 font-heading text-2xl font-semibold text-foreground">
          Academic Journey
        </h3>
        <Timeline items={milestones} />
      </div>
    </div>
  </Section>
);

export default About;
