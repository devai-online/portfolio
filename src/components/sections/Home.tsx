import professorPhoto from '@/assets/professor-photo.png';
import { ArrowRight } from 'lucide-react';
import { StatGrid } from '@/components/blocks';

const stats = [
  { value: '20+', label: 'Years of Service' },
  { value: '150+', label: 'Faculty Mentored' },
  { value: '₹15Cr+', label: 'Research Funding' },
  { value: '40+', label: 'IEEE Events' },
];

const Home = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-content">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
              SMIEEE &bull; FIETE &bull; FIE &bull; SMACM
            </p>
            <h1 className="font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Prof. JVR <span className="text-accent">Ravindra</span>
            </h1>
            <div className="my-7 h-px w-16 bg-accent" />
            <div className="space-y-1.5 text-white/75">
              <p className="text-xl font-light sm:text-2xl">Principal &amp; Professor of ECE</p>
              <p className="text-white/55">Vardhaman College of Engineering</p>
              <p className="text-white/55">Shamshabad, Telangana, India</p>
            </div>
            <p className="mt-8 max-w-xl leading-relaxed text-white/70">
              Academic leader in engineering education — advancing institutional
              governance, outcome-based education, accreditation excellence and
              research in VLSI and emerging technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-accent px-7 py-3 text-sm uppercase tracking-wider text-accent-foreground transition-colors duration-300 hover:bg-accent/90"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-3 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Explore Profile <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/20" />
              <img
                src={professorPhoto}
                alt="Prof. JVR Ravindra"
                className="relative w-60 object-cover grayscale transition-all duration-700 hover:grayscale-0 sm:w-72 lg:w-80"
              />
            </div>
          </div>
        </div>

        {/* Key achievements */}
        <div className="mt-16">
          <StatGrid stats={stats} tone="dark" />
        </div>
      </div>
    </section>
  );
};

export default Home;
