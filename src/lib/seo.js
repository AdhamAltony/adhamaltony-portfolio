import { profile } from '../data/profile';

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
  url: profile.siteUrl,
  ogImage: `${profile.siteUrl}/og.png`,
};

export function absoluteUrl(pathname = '') {
  if (!pathname) return siteConfig.url;
  const base = siteConfig.url.replace(/\/$/, '');
  const path = pathname.replace(/^\//, '');
  return `${base}/${path}`;
}

export function buildMetadata({ title, description, pathname, image } = {}) {
  const metaTitle = title
    ? `${title} | ${profile.name}`
    : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const url = absoluteUrl(pathname || '');
  const ogImage = image || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      type: 'website',
      siteName: profile.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${profile.name} portfolio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    keywords: [
      'product engineer',
      'full-stack product development',
      'idea to launch',
      'MVP build',
      'AI integration',
      'deployment',
      'Next.js',
      'AWS',
      'React',
    ],
  };
}
