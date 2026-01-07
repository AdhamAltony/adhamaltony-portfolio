import ContactForm from '../../src/components/sections/contact/ContactForm';
import ContactLinks from '../../src/components/sections/contact/ContactLinks';
import Container from '../../src/components/layout/Container';
import Reveal from '../../src/components/ui/Reveal';
import SectionHeader from '../../src/components/ui/SectionHeader';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact Adham Ahmed Altony to turn ideas into shipped products with AI and deployment handled.',
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="contact-title">
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow="Let's connect"
            title="Contact"
            titleId="contact-title"
            titleAs="h1"
            align="center"
            subtitle="Reach out to scope your idea, build the product, and ship it end to end."
          />
        </Reveal>
        <div className="grid w-full gap-6 justify-items-center md:grid-cols-2 md:items-start md:justify-items-stretch">
          <ContactForm />
          <ContactLinks />
        </div>
      </Container>
    </section>
  );
}
