import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import heroPortrait from '@/assets/portrait-hero.webp';
import cardLeadership from '@/assets/card-leadership.webp';
import cardResearch from '@/assets/card-research.webp';
import cardService from '@/assets/card-service.webp';
import newsAward from '@/assets/gallery/g12-award-stage.webp';
import newsQnx from '@/assets/gallery/g05-qnx-ehack.webp';
import newsObe from '@/assets/gallery/g03-obe-session.webp';

const stats = [
  { value: '27', label: 'Years in Academia' },
  { value: 'A++', label: 'NAAC (3.58)' },
  { value: '9', label: 'Ph.D. Scholars' },
  { value: '125+', label: 'Publications' },
  { value: '₹3.5 Cr', label: 'Funded Projects' },
  { value: '55', label: 'Policies & SOPs' },
];

const focus = [
  {
    img: cardLeadership,
    title: 'Academic Leadership',
    text: 'Governance, accreditation and outcome-based education across an autonomous institution.',
    to: '/leadership',
  },
  {
    img: cardResearch,
    title: 'Research & Innovation',
    text: 'VLSI, low-power design and emerging computing — funded projects, patents and publications.',
    to: '/research',
  },
  {
    img: cardService,
    title: 'IEEE & Service',
    text: 'Chapter leadership, faculty development, industry partnerships and societal outreach.',
    to: '/service',
  },
];

const news = [
  { img: newsAward, caption: 'Award Recognition', tag: 'Honours' },
  { img: newsQnx, caption: 'QNX eHack Industry Programme', tag: 'Industry' },
  { img: newsObe, caption: 'Outcome-Based Education Session', tag: 'Education' },
];

const affiliations = ['IEEE', 'IETE', 'ACM', 'NAAC', 'UGC', 'AICTE', 'QNX', 'Cadence'];

const Home = () => (
  <div>
    {/* 1 — Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-card px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-content items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            SMIEEE &bull; FIETE &bull; MACM
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Prof. JVR <span className="text-accent">Ravindra</span>
            <span className="mt-2 block text-2xl font-medium text-muted-foreground sm:text-3xl">
              Ph.D.
            </span>
          </h1>
          <div className="my-7 h-px w-16 bg-accent" />
          <p className="max-w-xl text-lg font-medium text-foreground">
            Advancing engineering education through outcome-based learning, research and quality
            assurance.
          </p>
          <p className="mt-3 text-muted-foreground">
            Principal &amp; Professor of ECE, Vardhaman College of Engineering, Hyderabad.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3 text-sm uppercase tracking-wider text-accent-foreground transition-colors duration-300 hover:bg-accent/90"
            >
              <Calendar className="h-4 w-4" /> Invite for a Talk
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm uppercase tracking-wider text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 border border-accent/30" />
            <img
              src={heroPortrait}
              alt="Prof. JVR Ravindra"
              className="relative w-60 object-cover sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>

    {/* 2 — Credibility strip */}
    <section className="border-y border-border bg-card px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl font-semibold text-accent sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 3 — Focus cards */}
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-content">
        <h2 className="mb-10 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Explore the work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {focus.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-colors duration-300 hover:border-accent/40"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* 4 — Latest news */}
    <section className="bg-card px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-content">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Latest news
          </h2>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <Link key={n.caption} to="/gallery" className="group overflow-hidden rounded-lg">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={n.img}
                  alt={n.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-accent">{n.tag}</p>
              <p className="mt-1 font-medium text-foreground group-hover:text-accent">
                {n.caption}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* 5 — Affiliations strip */}
    <section className="border-t border-border px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-content">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Affiliations & Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {affiliations.map((a) => (
            <span
              key={a}
              className="font-heading text-xl font-semibold tracking-wide text-primary/70"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
