import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import Container from '../../layout/Container';

export default function ProjectCaseStudy({ project }) {
  const { live, repo } = project.links || {};

  return (
    <section className="pb-16 sm:pb-20" aria-labelledby="case-study-title">
      <Container className="space-y-6">
        <Reveal>
          <SectionHeader
            eyebrow="Details"
            title="Case study"
            titleId="case-study-title"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={60}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="text-sm text-foreground/70">{project.overview}</p>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Problem</h3>
              <p className="text-sm text-foreground/70">{project.problem}</p>
            </Card>
          </Reveal>
          <Reveal delay={140}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Solution</h3>
              <p className="text-sm text-foreground/70">{project.solution}</p>
            </Card>
          </Reveal>
          <Reveal delay={180}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Outcomes</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={220}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">My Contributions</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {project.contributions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={260}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={300}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={340}>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">Challenges & Learnings</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
        <Reveal delay={380}>
          <Card className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>
                Live:{' '}
                {live ? (
                  <a
                    href={live}
                    className="text-accent underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {live}
                  </a>
                ) : (
                  'Available on request'
                )}
              </p>
              <p>
                GitHub:{' '}
                {repo ? (
                  <a
                    href={repo}
                    className="text-accent underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo}
                  </a>
                ) : (
                  'Private repo'
                )}
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
