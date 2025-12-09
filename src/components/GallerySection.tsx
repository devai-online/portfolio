import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary/70 font-medium tracking-widest text-sm uppercase">
            Moments & Milestones
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-background text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-background/80 hover:text-background transition-colors p-2"
          >
            <ChevronLeft size={40} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-background/80 hover:text-background transition-colors p-2"
          >
            <ChevronRight size={40} />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-background text-center mt-4 text-lg font-heading">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
