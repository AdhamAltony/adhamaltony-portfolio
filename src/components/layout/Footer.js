import Link from 'next/link';
import { profile } from '../../data/profile';
import Button from '../ui/Button';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="space-y-8">
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
              Ready to collaborate
            </p>
            <p className="text-lg font-semibold">Let us build something impactful.</p>
            <p className="text-sm text-foreground/70">
              Open to AI product engineering, full-stack roles, and ambitious web apps.
            </p>
          </div>
          <Button href="/contact" className="w-full sm:w-auto">
            Start a conversation
          </Button>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-foreground/70">{profile.title}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
            {profile.socials.map((social) => {
              const isExternal =
                social.href.startsWith('http') ||
                social.href.startsWith('mailto:');
              if (isExternal) {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="transition hover:text-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                );
              }

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="transition hover:text-foreground"
                >
                  {social.label}
                </Link>
              );
            })}
            <span className="text-foreground/40">{profile.location}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
