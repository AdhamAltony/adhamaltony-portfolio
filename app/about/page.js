import HowIGotHereSection from '../../src/components/sections/about/HowIGotHereSection';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Learn about Adham Ahmed Altony, a full-stack engineer focused on AI product delivery, RAG systems, and cloud-ready web apps.',
  pathname: '/about',
});

export default function AboutPage() {
  return (
    <>
      <HowIGotHereSection />
    </>
  );
}
