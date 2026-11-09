import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '@/components/Section';

import g01 from '@/assets/gallery/g01-felicitation.jpg';
import g02 from '@/assets/gallery/g02-keynote.jpg';
import g03 from '@/assets/gallery/g03-technical-session.jpg';
import g04 from '@/assets/gallery/g04-institutional-event.jpg';
import g05 from '@/assets/gallery/g05-icnwc-conference.jpg';
import g06 from '@/assets/gallery/g06-award-presentation.jpg';
import g07 from '@/assets/gallery/g07-certificate.jpg';
import g08 from '@/assets/gallery/g08-dignitaries.jpg';
import g09 from '@/assets/gallery/g09-mou-signing.jpg';
import g10 from '@/assets/gallery/g10-team-recognition.jpg';
import g11 from '@/assets/gallery/g11-faculty-students.jpg';
import g12 from '@/assets/gallery/g12-honour.jpg';

const galleryImages = [
  { src: g01, caption: 'Felicitation Ceremony' },
  { src: g02, caption: 'Keynote Address' },
  { src: g05, caption: 'ICNWC International Conference' },
  { src: g06, caption: 'Award Presentation' },
  { src: g03, caption: 'Technical Session' },
  { src: g09, caption: 'Industry MoU Signing' },
  { src: g04, caption: 'Institutional Celebration' },
  { src: g08, caption: 'Dignitaries & Panel' },
  { src: g07, caption: 'Certificate Presentation' },
  { src: g10, caption: 'Team Recognition' },
  { src: g11, caption: 'Faculty & Students' },
  { src: g12, caption: 'Honour & Recognition' },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () =>
    setSelected((i) => (i === null ? i : (i + 1) % galleryImages.length));
  const prev = () =>
    setSelected((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <Section
      id="gallery"
      eyebrow="News & Gallery"
      title={
        <>
          Moments &amp; <span className="text-muted-foreground">milestones</span>
        </>
      }
      intro="Highlights from conferences, award ceremonies, institutional events, industry partnerships and professional engagements."
      alt
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
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
              src={galleryImages[selected].src}
              alt={galleryImages[selected].caption}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
            <p className="mt-4 text-center font-heading text-lg text-white">
              {galleryImages[selected].caption}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
