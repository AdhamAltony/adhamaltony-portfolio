import { miniProjects, projectFilters, projects } from '../data/projects';

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects(limit = 3) {
  return projects.filter((project) => project.featured).slice(0, limit);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
}

export function filterProjects(list, filter) {
  if (!filter || filter === 'All') return list;
  return list.filter(
    (project) => project.category === filter || project.tags.includes(filter)
  );
}

export function getProjectFilters() {
  return ['All', ...projectFilters];
}

export function getMiniProjects() {
  return miniProjects;
}
