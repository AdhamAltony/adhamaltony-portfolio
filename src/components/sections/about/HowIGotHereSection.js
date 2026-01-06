import { howIGotHere } from '../../../data/profile';
import Container from '../../layout/Container';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import KeyWinsCard from './KeyWinsCard';
import Timeline from './Timeline';

export default function HowIGotHereSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="how-i-got-here-title">
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow="How I got here"
            title="A focused, chronological story"
            titleId="how-i-got-here-title"
            subtitle="Built around shipped work, measurable impact, and product outcomes."
          />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[2.3fr_1fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <Timeline items={howIGotHere.chapters} />
          </div>
          <div className="order-1 lg:order-2">
            <KeyWinsCard wins={howIGotHere.keyWins} />
          </div>
        </div>
      </Container>
    </section>
  );
}
