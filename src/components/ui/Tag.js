import { cn } from '../../lib/utils';

export default function Tag({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent transition duration-300 hover:border-accent/50 hover:bg-accent/20 sm:px-3 sm:py-1 sm:text-xs',
        className
      )}
    >
      {children}
    </span>
  );
}
