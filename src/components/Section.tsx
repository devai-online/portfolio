import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  /** Alternating background for visual rhythm. */
  alt?: boolean;
}

/**
 * Standard content section: a gold eyebrow label, a serif heading, an optional
 * intro paragraph, then the body. Fades in gently when scrolled into view.
 */
const Section = ({ id, eyebrow, title, intro, children, alt = false }: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 lg:py-28 ${
        alt ? 'bg-card' : 'bg-background'
      }`}
    >
      <div
        ref={ref}
        className={`mx-auto max-w-content transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
