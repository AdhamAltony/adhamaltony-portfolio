'use client';

import { useMemo, useState } from 'react';
import { filterProjects, getProjectFilters } from '../../../lib/utils';
import Container from '../../layout/Container';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects }) {
  const filters = getProjectFilters();
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = useMemo(
    () => filterProjects(projects, activeFilter),
    [projects, activeFilter]
  );

  return (
    <section className="py-14 sm:py-16" aria-labelledby="projects-title">
      <Container>
        <Reveal direction="left">
          <SectionHeader
            eyebrow="Portfolio"
            title="Projects"
            titleId="projects-title"
            titleAs="h1"
            subtitle="Case studies that highlight idea-to-launch delivery, full-stack builds, and business outcomes."
            actions={
              <div className="text-sm text-foreground/50">
                {visibleProjects.length} results
              </div>
            }
          />
        </Reveal>
        <Reveal
          direction="right"
          delay={80}
          className="mt-6 flex flex-nowrap gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition duration-300 hover:-translate-y-0.5 ${
                  isActive
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border/60 text-foreground/60 hover:border-accent/40 hover:text-foreground'
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        {visibleProjects.length === 0 ? (
          <p className="mt-6 text-sm text-foreground/60">
            No full case studies in this category yet. Check the mini projects
            section below for smaller builds.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
