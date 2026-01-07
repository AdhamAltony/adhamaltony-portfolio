'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '../../layout/Container';
import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';

export default function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem =
    typeof activeIndex === 'number' ? project.gallery[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  const titleId = `${project.slug}-gallery-title`;

  return (
    <section className="py-14 sm:py-16" aria-labelledby={titleId}>
      <Container className="space-y-6">
        <Reveal>
          <SectionHeader
            eyebrow="Screens"
            title="Project gallery"
            titleId={titleId}
            subtitle="Selected UI screens from the build."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {project.gallery.map((item, index) => (
            <Reveal key={item.src} delay={index * 80}>
              <Card className="group overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative w-full aspect-[16/10] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  aria-label={`Expand ${item.alt || 'project screenshot'}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              </Card>
            </Reveal>
          ))}
        </div>
        {activeItem ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded gallery image for ${project.title}`}
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-6xl rounded-3xl border border-border/60 bg-background/95 p-4 shadow-2xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                  {project.title}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 transition hover:text-foreground"
                >
                  Close
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/60 bg-background/70">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="object-contain"
                />
              </div>
              {activeItem.alt ? (
                <p className="mt-3 text-xs text-foreground/60">{activeItem.alt}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
