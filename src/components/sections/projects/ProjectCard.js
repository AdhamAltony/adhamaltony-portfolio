import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

export default function ProjectCard({ project }) {
  const { live, repo } = project.links || {};
  const hasLinks = Boolean(live || repo);

  return (
    <Card className="group flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="bg-background/80">{project.category}</Badge>
        <span className="text-xs text-foreground/60">{project.timeline}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-background/40 via-muted/50 to-background/80">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          />
        ) : null}
        {!project.image ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.35),transparent_60%)] opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </>
        ) : null}
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-lg font-semibold text-foreground transition duration-300 group-hover:text-accent"
          >
            {project.title}
          </Link>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40 transition duration-300 group-hover:text-accent"
          >
            Case study
            <ArrowUpRight className="h-3 w-3 transition duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <p className="text-sm text-foreground/70">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-foreground/20 bg-foreground/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-background shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="text-sm text-foreground/70">
        <p className="font-semibold text-foreground">Role</p>
        <p>{project.role}</p>
      </div>
      <div className="text-sm text-foreground/70">
        <p className="font-semibold text-foreground">Stack</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="text-sm text-foreground/70">
        <p className="font-semibold text-foreground">Outcomes</p>
        <ul className="mt-2 space-y-2">
          {project.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {live ? (
          <Button href={live} variant="outline" size="sm">
            Live
          </Button>
        ) : null}
        {repo ? (
          <Button href={repo} variant="ghost" size="sm">
            GitHub
          </Button>
        ) : null}
        {!hasLinks ? (
          <span className="text-xs text-foreground/50">Demo on request</span>
        ) : null}
      </div>
    </Card>
  );
}
