import Link from 'next/link';
import { cn } from '../../lib/utils';

export default function Card({ href, className, children, ...props }) {
  const classes = cn(
    'rounded-2xl border border-border/80 bg-gradient-to-br from-card/90 via-card/80 to-background/80 p-5 sm:p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl focus-within:border-accent/60',
    className
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
