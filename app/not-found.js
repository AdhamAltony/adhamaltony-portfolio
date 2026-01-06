import Link from 'next/link';
import Container from '../src/components/layout/Container';
import Button from '../src/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
          404
        </p>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-sm text-foreground/70">
          The page you are looking for does not exist. Try heading back home or
          browsing the projects.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent hover:text-accent/80"
          >
            View projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
