import { cn } from '../../lib/utils';

export default function Chip({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-semibold text-foreground/80 shadow-soft transition duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-foreground',
        className
      )}
    >
      {children}
    </span>
  );
}
