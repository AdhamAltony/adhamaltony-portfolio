import Image from 'next/image';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Container from '../../layout/Container';
import Reveal from '../../ui/Reveal';
import Tag from '../../ui/Tag';

export default function ProjectHeader({ project }) {
  const { live, repo } = project.links || {};
  const hasMedia = Boolean(project.video || project.image);

  return (
    <section className="py-16 sm:py-20" aria-labelledby="project-title">
      <Container className="space-y-6">
        <Reveal direction="left">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{project.category}</Badge>
            <span className="text-sm text-foreground/60">{project.timeline}</span>
          </div>
        </Reveal>
        <Reveal direction="left" delay={80}>
          <div className="space-y-4">
            <h1 id="project-title" className="text-3xl font-semibold md:text-4xl">
              {project.title}
            </h1>
            <p className="text-lg text-foreground/70">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  className="border-foreground/20 bg-foreground/90 text-background hover:border-foreground/40 hover:bg-foreground hover:text-background"
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal direction="left" delay={140}>
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-2 text-sm text-foreground/70">
              <p className="font-semibold text-foreground">Role</p>
              <p>{project.role}</p>
            </div>
            <div className="space-y-2 text-sm text-foreground/70">
              <p className="font-semibold text-foreground">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal direction="left" delay={200}>
          <div className="flex flex-wrap gap-3">
            {live ? (
              <Button href={live}>Live Project</Button>
            ) : (
              <Button variant="outline" disabled>
                Live demo on request
              </Button>
            )}
            {repo ? (
              <Button href={repo} variant="ghost">
                GitHub Repo
              </Button>
            ) : (
              <Button variant="ghost" disabled>
                Private repo
              </Button>
            )}
          </div>
        </Reveal>
        <Reveal direction="right" delay={240}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background/40 via-muted/40 to-background/80 shadow-soft">
            {project.video ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.image || undefined}
              >
                <source src={project.video} />
              </video>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-center"
              />
            ) : null}
            {!hasMedia ? (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
            ) : null}
            {!hasMedia ? (
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                  Project preview
                </div>
                <p className="text-sm text-foreground/70">
                  Media coming soon. Full case study below.
                </p>
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
