import HowIGotHereSection from '../../src/components/sections/about/HowIGotHereSection';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Learn about Adham Ahmed Altony, a product engineer focused on idea-to-launch delivery, AI integration, and full-stack builds.',
  pathname: '/about',
});

export default function AboutPage() {
  return (
    <>
      <HowIGotHereSection />
    </>
  );
}
