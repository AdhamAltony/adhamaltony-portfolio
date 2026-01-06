import { siteConfig } from '../src/lib/seo';
import { getProjectSlugs } from '../src/lib/utils';

export default function sitemap() {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const lastModified = new Date();

  const staticRoutes = ['', '/about', '/projects', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  const projectRoutes = getProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...projectRoutes];
}
