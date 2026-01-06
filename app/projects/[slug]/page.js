import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../src/components/layout/Container';
import ProjectCaseStudy from '../../../src/components/sections/projects/ProjectCaseStudy';
import ProjectGallery from '../../../src/components/sections/projects/ProjectGallery';
import ProjectHeader from '../../../src/components/sections/projects/ProjectHeader';
import Card from '../../../src/components/ui/Card';
import Reveal from '../../../src/components/ui/Reveal';
import { buildMetadata } from '../../../src/lib/seo';
import { getNextProject, getProjectBySlug, getProjectSlugs } from '../../../src/lib/utils';

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return buildMetadata({
      title: 'Project Not Found',
      description: 'Project details could not be located.',
      pathname: `/projects/${params.slug}`,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.shortDescription,
    pathname: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(params.slug);

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <ProjectCaseStudy project={project} />
      {nextProject ? (
        <section className="pb-20">
          <Container>
            <Reveal delay={120}>
              <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                    Next project
                  </p>
                  <h3 className="text-xl font-semibold">{nextProject.title}</h3>
                  <p className="text-sm text-foreground/70">
                    {nextProject.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="text-sm font-semibold text-accent hover:text-accent/80"
                >
                  View case study
                </Link>
              </Card>
            </Reveal>
          </Container>
        </section>
      ) : null}
    </>
  );
}
