import { profile } from '../../../data/profile';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import Container from '../../layout/Container';

const chapterLabels = [
  'Foundations',
  'Client delivery',
  'AI track',
  'Recent builds',
];

export default function AboutStorySection() {
  const focusItems = profile.focusHighlights?.length
    ? profile.focusHighlights
    : profile.focusAreas;

  return (
    <section className="py-16 sm:py-20" aria-labelledby="about-story-title">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow="Journey"
            title="How I got here"
            titleId="about-story-title"
            subtitle="A chronological view of the chapters that shaped my work as an end-to-end product engineer."
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ol className="relative space-y-8 border-l border-border/60 pl-12 sm:pl-14">
            {profile.story.map((paragraph, index) => {
              const label = chapterLabels[index] || `Chapter ${index + 1}`;

              return (
                <Reveal key={paragraph} delay={index * 90}>
                  <li className="relative">
                    <span className="absolute -left-12 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-xs font-semibold text-foreground/70 shadow-soft sm:-left-14">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                        {label}
                      </p>
                      <p className="text-sm text-foreground/70">{paragraph}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
          <div className="space-y-8">
            <Reveal direction="right" delay={120}>
              <div className="rounded-[32px] border border-border/50 bg-gradient-to-br from-accent/10 via-background/90 to-background/60 p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                  Right now
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  {profile.focusSummary}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {focusItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-medium text-foreground/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                  Collaboration style
                </p>
                <div className="grid gap-3">
                  {profile.strengths.map((strength) => (
                    <div
                      key={strength}
                      className="flex items-center gap-3 text-sm text-foreground/70"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {strength}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
