import Card from '../../ui/Card';
import Chip from '../../ui/Chip';

export default function KeyWinsCard({ wins }) {
  return (
    <Card className="space-y-4 lg:sticky lg:top-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
          Key Wins
        </p>
        <p className="mt-2 text-lg font-semibold text-foreground">
          Results you can scan fast.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {wins.map((win) => (
          <Chip key={win.label}>{win.label}</Chip>
        ))}
      </div>
    </Card>
  );
}
