import { siteConfig } from '../src/lib/seo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url.replace(/\/$/, '')}/sitemap.xml`,
  };
}
