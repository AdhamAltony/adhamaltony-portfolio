import HeroSection from '../src/components/sections/home/HeroSection';
import HighlightsSection from '../src/components/sections/home/HighlightsSection';
import FeaturedProjectsSection from '../src/components/sections/home/FeaturedProjectsSection';
import TechStackSection from '../src/components/sections/home/TechStackSection';
import { buildMetadata } from '../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Home',
  description:
    'AI Product Engineer portfolio highlighting RAG-ready web apps, full-stack delivery, and AWS-backed systems.',
  pathname: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedProjectsSection />
      <TechStackSection />
    </>
  );
}
