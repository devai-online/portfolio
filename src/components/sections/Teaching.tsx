import Section from '@/components/Section';
import { SimpleTable } from '@/components/blocks';

const courses = [
  ['Electronic Circuits', 'Electronic Devices & Circuits; Circuit Analysis; Integrated Circuits & Applications'],
  ['Digital Systems & VLSI', 'Digital Logic Design; CMOS VLSI Design; Low-Power VLSI Design'],
  ['Signals & Control', 'Signals & Systems; Digital Signal Processing; Linear Control Systems'],
  ['Electromagnetics', 'Electromagnetics & Transmission Lines; Antennas & Wave Propagation'],
  ['Communications', 'Analog & Digital Communications; Wireless Communications & Networks'],
  ['Embedded Systems & IoT', 'Real-Time Embedded Systems; IoT Architectures & Protocols'],
  ['Artificial Intelligence', 'Machine Learning'],
];

const graduated = [
  ['Ch. Ashok Babu', 'JNTU Hyderabad', '2019', 'Optimised threshold for improved power-delay product of VLSI circuits'],
  ['B. Srikanth', 'KL University', '2021', 'FPGA-based double-precision floating-point computation and AES'],
  ['M. Lavanya', 'KL University', '2021', 'Machine-learning-based approximate 4:2 compressors'],
  ['C. Padmini', 'JNTU Hyderabad', '2021', 'Differential power attacks in secure cryptographic systems'],
  ['Sangeetha Singh', 'JNTU Kakinada', '2023', 'Performance modelling of efficient network-on-chip architectures'],
];

const ongoing = [
  ['Sathwara Snehal Bharatkumar', 'RK University', 'AI/ML modelling techniques'],
  ['Krupali Sureshbhai Gosai', 'Marwadi University', 'Transaction modelling analysis'],
  ['Sarepalli Madhuri', 'Marwadi University', 'Low-power analysis with quantum computing'],
  ['K. Purushotham Reddy', 'SR University', 'In-memory and edge computing architectures for low-power VLSI'],
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
    intro="Teaching experience across undergraduate and postgraduate engineering education since 1999 — theory courses, laboratory instruction, Engineering Design Thinking, Universal Human Values and project supervision."
  >
    <h3 className="mb-5 font-heading text-2xl font-semibold text-foreground">Courses Taught</h3>
    <SimpleTable headers={['Domain', 'Courses']} rows={courses} />

    <h3 className="mb-5 mt-12 font-heading text-2xl font-semibold text-foreground">
      Doctoral Scholars Graduated
    </h3>
    <SimpleTable
      headers={['Scholar', 'University', 'Year', 'Research Focus']}
      rows={graduated}
    />

    <h3 className="mb-5 mt-12 font-heading text-2xl font-semibold text-foreground">
      Ongoing Doctoral Supervision
    </h3>
    <SimpleTable headers={['Scholar', 'University', 'Research Area']} rows={ongoing} />

    <div className="mt-12 border-l-2 border-accent bg-card p-8">
      <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
        Mentoring Approach
      </h3>
      <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
        My mentoring emphasises research problem formulation, technical rigour, responsible
        scholarship and the clear communication of research outcomes.
      </p>
    </div>
  </Section>
);

export default Teaching;
