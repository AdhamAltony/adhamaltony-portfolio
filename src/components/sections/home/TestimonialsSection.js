'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonials } from '../../../data/testimonials';
import Badge from '../../ui/Badge';
import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import Container from '../../layout/Container';

const trustSignals = [
  'Marketplace feedback',
  'Client delivery proof',
  'End-to-end builds',
  'Screenshots provided',
];

export default function TestimonialsSection() {
  const [activeId, setActiveId] = useState(null);
  const activeTestimonial = testimonials.find((item) => item.id === activeId);

  useEffect(() => {
    if (!activeId) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeId]);

  return (
    <section
      className="relative border-y border-border/60 bg-muted/30 py-14 sm:py-16"
      aria-labelledby="testimonials-title"
      id="testimonials"
    >
      <Container>
        <Reveal direction="left">
          <SectionHeader
            eyebrow="Testimonials"
            title="Client trust"
            titleId="testimonials-title"
            subtitle="Screenshots of marketplace feedback from Khamsat, Mostaql, and Nafethly."
          />
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2">
          {trustSignals.map((signal) => (
            <Badge key={signal} className="bg-background/70">
              {signal}
            </Badge>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 90}>
              <Card className="group space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    {testimonial.source}
                  </p>
                  <span className="text-xs text-foreground/60">
                    Marketplace feedback
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(testimonial.id)}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  aria-label={`Expand testimonial from ${testimonial.source}`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 768px) 30rem, 100vw"
                    className="object-contain transition duration-300 group-hover:scale-[1.01]"
                  />
                </button>
                <p className="text-xs text-foreground/60">{testimonial.note}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        {activeTestimonial ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeTestimonial.source} testimonial`}
            onClick={() => setActiveId(null)}
          >
            <div
              className="relative w-full max-w-5xl rounded-3xl border border-border/60 bg-background/95 p-4 shadow-2xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                  {activeTestimonial.source}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 transition hover:text-foreground"
                >
                  Close
                </button>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 bg-background/70">
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.alt}
                  fill
                  sizes="(min-width: 1024px) 70vw, 95vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-xs text-foreground/60">
                {activeTestimonial.note}
              </p>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
