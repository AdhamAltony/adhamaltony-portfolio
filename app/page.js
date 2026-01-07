import HeroSection from '../src/components/sections/home/HeroSection';
import HighlightsSection from '../src/components/sections/home/HighlightsSection';
import FeaturedProjectsSection from '../src/components/sections/home/FeaturedProjectsSection';
import TechStackSection from '../src/components/sections/home/TechStackSection';
import TestimonialsSection from '../src/components/sections/home/TestimonialsSection';
import { buildMetadata } from '../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Home',
  description:
    'Product engineer turning ideas into full-stack applications with AI when it adds value and deployment handled.',
  pathname: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <FeaturedProjectsSection />
      <TechStackSection />
    </>
  );
}
