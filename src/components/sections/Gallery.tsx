import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '@/components/Section';

import JVR118 from '@/assets/gallery/JVR118.jpg';
import JVR117 from '@/assets/gallery/JVR117.jpg';
import JVR116 from '@/assets/gallery/JVR116.jpg';
import JVR115 from '@/assets/gallery/JVR115.jpg';
import JVR114 from '@/assets/gallery/JVR114.jpg';
import JVR113 from '@/assets/gallery/JVR113.jpg';
import JVR112 from '@/assets/gallery/JVR112.jpg';
import JVR11 from '@/assets/gallery/JVR11.jpg';

const galleryImages = [
  { src: JVR118, caption: 'ET Industry Achievers Award 2024-25' },
  { src: JVR115, caption: 'Times Education Excellence Awards' },
  { src: JVR114, caption: 'VCE 25 Years Celebration' },
  { src: JVR117, caption: 'Distinguished Guests Welcome' },
  { src: JVR116, caption: 'Induction Programme Inauguration' },
  { src: JVR113, caption: 'Blood Donation Camp Recognition' },
  { src: JVR112, caption: 'QNX Partnership Signing' },
  { src: JVR11, caption: 'MBA Orientation Day 2025' },
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
      intro="Highlights from events, awards, partnerships and institutional celebrations."
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
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/85 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
