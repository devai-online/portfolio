import Section from '@/components/Section';
import { TagRow, BulletList } from '@/components/blocks';

const courses = [
  'VLSI Design',
  'Digital System Design',
  'Low-Power VLSI',
  'CMOS Circuits',
  'Embedded Systems',
  'Microprocessors & Microcontrollers',
  'Digital Signal Processing',
  'Research Methodology',
];

const supervision = [
  'Doctoral (Ph.D.) supervision in VLSI and allied areas',
  'Guidance of UG and PG projects with research and industry orientation',
  'Mentoring of early-career faculty and research scholars',
  'Student teams recognised in national and international competitions',
];

const Teaching = () => (
  <Section
    id="teaching"
    eyebrow="Teaching & Mentorship"
    title={
      <>
        Teaching, guiding, <span className="text-muted-foreground">mentoring</span>
      </>
    }
    intro="A teaching philosophy that blends conceptual depth with hands-on design, nurturing independent thinkers through research supervision and sustained mentorship."
  >
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h3 className="mb-5 font-heading text-2xl text-foreground">Courses Taught</h3>
        <TagRow tags={courses} />

        <h3 className="mb-5 mt-12 font-heading text-2xl text-foreground">
          Supervision & Student Achievements
        </h3>
        <BulletList items={supervision} />
      </div>

      <div className="lg:col-span-5">
        <div className="h-full border-l-2 border-accent bg-card p-8">
          <h3 className="mb-4 font-heading text-2xl text-foreground">Teaching Philosophy</h3>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            I believe engineering education must connect first principles to real design.
            Students learn best when challenged with authentic problems, supported by
            mentorship, and assessed against clear outcomes. My aim is to develop
            technically strong, ethically grounded and self-directed engineers prepared
            for research and industry alike.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Teaching;
