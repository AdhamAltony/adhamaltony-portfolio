import ProjectsGrid from '../../src/components/sections/projects/ProjectsGrid';
import MiniProjectsSection from '../../src/components/sections/projects/MiniProjectsSection';
import { buildMetadata } from '../../src/lib/seo';
import { getAllProjects } from '../../src/lib/utils';

export const metadata = buildMetadata({
  title: 'Projects',
  description:
    'Explore idea-to-launch full-stack projects with outcomes, AI-ready features, and live demos.',
  pathname: '/projects',
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <ProjectsGrid projects={projects} />
      <MiniProjectsSection />
    </>
  );
}
