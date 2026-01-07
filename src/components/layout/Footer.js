'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '../../data/profile';
import Button from '../ui/Button';
import Container from './Container';

export default function Footer() {
  const pathname = usePathname();
  const showCta = !pathname?.startsWith('/contact');

  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="space-y-8">
        {showCta ? (
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
              End-to-end product engineering
            </p>
            <p className="text-lg font-semibold">Bring the idea. I will build the engine.</p>
            <p className="text-sm text-foreground/70">
              Full-stack builds, AI when it adds value, and deployment handled at a practical cost.
            </p>
          </div>
          <Button href="/contact" className="w-full sm:w-auto">
            Start a build
          </Button>
        </div>
        ) : null}
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
