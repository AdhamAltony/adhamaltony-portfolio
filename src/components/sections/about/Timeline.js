import Reveal from '../../ui/Reveal';
import TimelineItem from './TimelineItem';

export default function Timeline({ items }) {
  return (
    <ol
      className="relative space-y-6 sm:border-l sm:border-border/60 sm:pl-8"
      aria-label="How I got here timeline"
    >
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 90}>
          <TimelineItem item={item} />
        </Reveal>
      ))}
    </ol>
  );
}
