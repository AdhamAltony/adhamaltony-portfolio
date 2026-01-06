import { cn } from '../../lib/utils';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  actions,
  align = 'left',
  className,
  titleId,
  titleAs = 'h2',
}) {
  const TitleTag = titleAs;

  return (
    <div
      className={cn(
        'flex flex-wrap items-end justify-between gap-4',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <div className={cn('space-y-3', align === 'center' && 'mx-auto')}>
        {eyebrow ? (
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50 sm:text-xs sm:tracking-[0.3em]">
            <span className="h-px w-6 bg-accent/70 sm:w-10" />
            {eyebrow}
          </p>
        ) : null}
        <TitleTag id={titleId} className="text-2xl font-semibold md:text-3xl">
          {title}
        </TitleTag>
        {subtitle ? (
          <p className="max-w-2xl text-sm text-foreground/70">{subtitle}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:justify-end">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
