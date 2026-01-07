import { profile } from '../../../data/profile';
import Card from '../../ui/Card';
import SectionHeader from '../../ui/SectionHeader';
import Reveal from '../../ui/Reveal';
import Container from '../../layout/Container';

export default function HighlightsSection() {
  return (
    <section
      className="relative border-y border-border/60 bg-muted/30 py-14 sm:py-16"
      aria-labelledby="highlights-title"
    >
      <Container>
        <Reveal direction="left">
          <SectionHeader
            eyebrow="Highlights"
            title="Impact snapshot"
            titleId="highlights-title"
            subtitle="A quick look at idea-to-launch delivery, focus areas, and outcomes."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.highlights.map((highlight, index) => (
            <Reveal key={highlight.label} delay={index * 90}>
              <Card className="group space-y-3">
                <div className="h-1 w-10 rounded-full bg-accent/20 transition duration-300 group-hover:w-14 group-hover:bg-accent/60" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  {highlight.label}
                </p>
                <p className="text-3xl font-semibold tracking-tight">
                  {highlight.value}
                </p>
                <p className="text-sm text-foreground/70">
                  {highlight.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
