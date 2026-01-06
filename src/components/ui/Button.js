import Link from 'next/link';
import { cn } from '../../lib/utils';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary:
    'relative overflow-hidden bg-accent text-accent-foreground shadow-soft before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.25),transparent)] before:opacity-0 before:transition before:duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:before:opacity-100',
  secondary: 'bg-muted/80 text-foreground hover:bg-muted',
  outline:
    'border border-border/80 bg-transparent text-foreground hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/80',
  ghost: 'text-foreground/80 hover:-translate-y-0.5 hover:bg-muted/80 hover:text-foreground',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5',
  lg: 'px-6 py-3 text-base',
};

export default function Button({
  href,
  children,
  className,
  variant = 'primary',
  size = 'md',
  type,
  ...props
}) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    const isDownload = Boolean(props.download);

    if (isExternal || isDownload) {
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          {...props}
        >
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
    <button type={type || 'button'} className={classes} {...props}>
      {children}
    </button>
  );
}
