import { cn } from '../../lib/utils';

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/80 transition duration-300 hover:border-accent/50 hover:text-foreground',
        className
      )}
    >
      {children}
    </span>
  );
}
