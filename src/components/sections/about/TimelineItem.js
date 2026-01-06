import Card from '../../ui/Card';

export default function TimelineItem({ item }) {
  return (
    <li className="relative">
      <Card className="mx-auto w-full max-w-xl space-y-3 sm:mx-0 sm:max-w-none">
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
