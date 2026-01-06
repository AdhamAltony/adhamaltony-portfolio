import Link from 'next/link';
import { getFeaturedProjects } from '../../../lib/utils';
import Container from '../../layout/Container';
import SectionHeader from '../../ui/SectionHeader';
import Reveal from '../../ui/Reveal';
import ProjectCard from '../projects/ProjectCard';

export default function FeaturedProjectsSection() {
  const projects = getFeaturedProjects(3);

  return (
    <section
      className="py-14 sm:py-16"
      aria-labelledby="featured-projects-title"
      id="projects"
    >
      <Container>
        <Reveal direction="left">
          <SectionHeader
            eyebrow="Case Studies"
            title="Featured projects"
            titleId="featured-projects-title"
            subtitle="Case studies focused on AI product engineering and full-stack delivery."
            actions={
              <Link
                href="/projects"
                className="text-sm font-semibold text-accent transition hover:text-accent/80"
              >
                View all projects
              </Link>
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
