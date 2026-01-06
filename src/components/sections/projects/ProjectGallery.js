import Image from 'next/image';
import Container from '../../layout/Container';
import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';

export default function ProjectGallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  const titleId = `${project.slug}-gallery-title`;

  return (
    <section className="py-14 sm:py-16" aria-labelledby={titleId}>
      <Container className="space-y-6">
        <Reveal>
          <SectionHeader
            eyebrow="Screens"
            title="Project gallery"
            titleId={titleId}
            subtitle="Selected UI screens from the build."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {project.gallery.map((item, index) => (
            <Reveal key={item.src} delay={index * 80}>
              <Card className="group overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
