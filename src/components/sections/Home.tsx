import professorPhoto from '@/assets/professor-photo.png';
import { ArrowRight } from 'lucide-react';
import { StatGrid, BulletList } from '@/components/blocks';
import { Link } from 'react-router-dom';

const stats = [
  { value: '25+', label: 'Years in Academia' },
  { value: '5', label: 'Doctorates Awarded' },
  { value: '125+', label: 'Publications' },
  { value: 'A++', label: 'NAAC Accreditation' },
];

const highlights = [
  'Academic and teaching experience since 1999',
  'Ph.D. in VLSI from IIIT Hyderabad',
  'Five doctoral scholars graduated; four ongoing supervisions',
  'Leadership in academic regulations, policies and quality assurance',
  'Senior Member IEEE, Fellow IETE and Member ACM',
  'Co-author of a Wiley book on drone technology',
];

const Home = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-card px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
    <div className="mx-auto w-full max-w-content">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Text */}
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            SMIEEE &bull; FIETE &bull; MACM
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Prof. JVR <span className="text-accent">Ravindra</span>
            <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">
              Ph.D.
            </span>
          </h1>
          <div className="my-7 h-px w-16 bg-accent" />
          <div className="space-y-1.5 text-muted-foreground">
            <p className="text-lg font-medium text-foreground sm:text-xl">
              Principal &amp; Professor of Electronics &amp; Communication Engineering
            </p>
            <p>Vardhaman College of Engineering, Hyderabad</p>
          </div>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Academic leader, educator and researcher with a career spanning teaching,
            research, institutional governance and quality assurance since 1999 —
            strengthening engineering education through outcome-based learning, faculty
            development, research mentorship and evidence-based institutional improvement.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3 text-sm uppercase tracking-wider text-accent-foreground transition-colors duration-300 hover:bg-accent/90"
            >
              Get in Touch
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm uppercase tracking-wider text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Research &amp; Publications <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 border border-accent/30" />
            <img
              src={professorPhoto}
              alt="Prof. JVR Ravindra"
              className="relative w-60 object-cover grayscale transition-all duration-700 hover:grayscale-0 sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-14">
        <StatGrid stats={stats} />
      </div>

      {/* Profile highlights */}
      <div className="mt-14 rounded-lg border border-border bg-background p-8">
        <h2 className="mb-6 font-heading text-2xl font-semibold text-foreground">
          Selected Profile Highlights
        </h2>
        <BulletList items={highlights} columns={2} />
      </div>
    </div>
  </section>
);

export default Home;
