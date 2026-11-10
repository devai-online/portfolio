import { useState, useEffect, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '@/components/Section';

import g01 from '@/assets/gallery/g01-leadership-review.webp';
import g02 from '@/assets/gallery/g02-governance-meeting.webp';
import g03 from '@/assets/gallery/g03-obe-session.webp';
import g04 from '@/assets/gallery/g04-faculty-development.webp';
import g05 from '@/assets/gallery/g05-qnx-ehack.webp';
import g06 from '@/assets/gallery/g06-awareness-drive.webp';
import g07 from '@/assets/gallery/g07-anti-drug-awareness.webp';
import g08 from '@/assets/gallery/g08-ncc-cadets.webp';
import g09 from '@/assets/gallery/g09-nss-day.webp';
import g10 from '@/assets/gallery/g10-faculty-group.webp';
import g11 from '@/assets/gallery/g11-student-event.webp';
import g12 from '@/assets/gallery/g12-award-stage.webp';
import g13 from '@/assets/gallery/g13-felicitation.webp';
import g14 from '@/assets/gallery/g14-silver-jubilee.webp';

interface Item {
  src: string;
  caption: string;
  category: string;
}

const images: Item[] = [
  { src: g01, caption: 'Academic Review Meeting', category: 'Leadership' },
  { src: g02, caption: 'Governance Meeting', category: 'Leadership' },
  { src: g03, caption: 'Outcome-Based Education Session', category: 'Education' },
  { src: g04, caption: 'Faculty Development Programme', category: 'Education' },
  { src: g05, caption: 'QNX eHack Industry Programme', category: 'Industry' },
  { src: g06, caption: 'Community Awareness Drive', category: 'Outreach' },
  { src: g07, caption: 'Anti-Drug Awareness Address', category: 'Outreach' },
  { src: g08, caption: 'NCC Cadets Programme', category: 'Outreach' },
  { src: g09, caption: 'NSS Day Celebration', category: 'Outreach' },
  { src: g10, caption: 'Faculty & Student Group', category: 'Students' },
  { src: g11, caption: 'Student Engagement', category: 'Students' },
  { src: g12, caption: 'Award Recognition', category: 'Honours' },
  { src: g13, caption: 'Felicitation Ceremony', category: 'Honours' },
  { src: g14, caption: 'Silver Jubilee Celebration', category: 'Honours' },
];

const categories = ['All', 'Leadership', 'Education', 'Industry', 'Outreach', 'Students', 'Honours'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? images : images.filter((i) => i.category === filter)),
    [filter]
  );

  // Reset lightbox when the filter changes.
  useEffect(() => setSelected(null), [filter]);

  const next = () => setSelected((i) => (i === null ? i : (i + 1) % visible.length));
  const prev = () =>
    setSelected((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, visible.length]);

  return (
    <Section
      id="gallery"
      eyebrow="News & Gallery"
      title={
        <>
          Moments &amp; <span className="text-muted-foreground">milestones</span>
        </>
      }
      intro="Highlights from leadership engagements, outcome-based education, industry partnerships, societal outreach, student mentorship and honours — filter by category below."
      alt
    >
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === c
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((image, index) => (
          <button
            key={image.caption}
            onClick={() => setSelected(index)}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/85 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-left text-sm font-medium text-white">{image.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-4 p-2 text-white/80 transition-colors hover:text-white md:left-8"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-4 p-2 text-white/80 transition-colors hover:text-white md:right-8"
          >
            <ChevronRight size={40} />
          </button>
          <div className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={visible[selected].src}
              alt={visible[selected].caption}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
            <p className="mt-4 text-center font-heading text-lg text-white">
              {visible[selected].caption}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
