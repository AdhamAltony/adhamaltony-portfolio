import { getMiniProjects } from '../../../lib/utils';
import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import Container from '../../layout/Container';

export default function MiniProjectsSection() {
  const projects = getMiniProjects();

  return (
    <section className="py-14 sm:py-16" aria-labelledby="mini-projects-title">
      <Container>
        <Reveal direction="left">
          <SectionHeader
            eyebrow="Additional work"
            title="Smaller builds"
            titleId="mini-projects-title"
            subtitle="Extra tools and experiments that showcase momentum and curiosity."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <Card className="space-y-3">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-foreground/70">{project.description}</p>
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
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
