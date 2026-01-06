import '../src/styles/globals.css';
import { Source_Sans_3, Space_Grotesk } from 'next/font/google';
import Footer from '../src/components/layout/Footer';
import Navbar from '../src/components/layout/Navbar';
import { siteConfig } from '../src/lib/seo';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const themeScript = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (_) {}
})();`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/adham-favicons-pack/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/adham-favicons-pack/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/adham-favicons-pack/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/adham-favicons-pack/favicon.ico' },
    ],
    apple: [{ url: '/adham-favicons-pack/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/adham-favicons-pack/favicon.ico'],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_55%)] motion-safe:animate-float-slow" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),transparent_40%,rgba(249,115,22,0.08))] motion-safe:animate-float-slower dark:bg-[linear-gradient(120deg,rgba(15,23,42,0.6),transparent_40%,rgba(249,115,22,0.2))]" />
        <Navbar />
        <main id="content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
