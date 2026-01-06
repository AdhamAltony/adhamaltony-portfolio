import Card from '../../ui/Card';

export default function TimelineItem({ item }) {
  return (
    <li className="relative">
      <span
        className="absolute -left-[6px] top-7 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(249,115,22,0.12)]"
        aria-hidden="true"
      />
      <Card className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-foreground/70">{item.summary}</p>
        </div>
        {item.bullets?.length ? (
          <ul className="space-y-2 text-sm text-foreground/70">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Card>
    </li>
  );
}
