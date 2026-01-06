import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { profile } from '../../../data/profile';
import Button from '../../ui/Button';
import Tag from '../../ui/Tag';
import Container from '../../layout/Container';
import Reveal from '../../ui/Reveal';

function ProfileImage({ className = '' }) {
  return (
    <div
      className={`group relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/25 via-accent/10 to-transparent blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-border/60 bg-background/90 shadow-soft transition duration-300 group-hover:border-accent/50 group-hover:shadow-lg">
        <Image
          src={profile.profileImage}
          alt={profile.profileImageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 16rem, (min-width: 768px) 14rem, 10rem"
          className="object-cover object-center drop-shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition duration-300 group-hover:scale-[1.03]"
          style={{ objectPosition: profile.profileImagePosition }}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="overflow-hidden py-16 sm:py-20 lg:py-28"
      aria-labelledby="hero-title"
    >
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal
          direction="left"
          className="flex flex-col items-center space-y-5 text-center sm:space-y-6"
        >
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 sm:text-xs">
              {profile.location}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/60 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="sm:hidden">Open to roles</span>
              <span className="hidden sm:inline">Open to impact-driven roles</span>
            </div>
          </div>
          <ProfileImage className="mx-auto md:hidden" />
          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-3">
              <p className="mx-auto max-w-md text-[11px] font-semibold uppercase tracking-[0.25em] text-center text-foreground/60 sm:text-sm sm:tracking-[0.35em]">
                {profile.title}
              </p>
              <h1
                id="hero-title"
                className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                <span className="relative inline-flex">
                  <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-accent/20" />
                  <span className="relative">{profile.name}</span>
                </span>
              </h1>
              <p className="text-base text-foreground/70 sm:text-lg md:text-xl">
                {profile.branding}
              </p>
            </div>
            <p className="mx-auto max-w-xl text-sm text-foreground/70 sm:text-base">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href="/projects" className="w-full sm:w-auto">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href={profile.resumeUrl}
              variant="outline"
              download
              className="w-full sm:w-auto"
            >
              Download CV <Download className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
              Contact <Mail className="h-4 w-4" />
            </Button>
          </div>
          <div className="md:hidden space-y-3 rounded-2xl border border-border/60 bg-card/70 p-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/50">
              Focus
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {(profile.focusHighlights?.length
                ? profile.focusHighlights
                : profile.focusAreas
              ).map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-xs font-medium text-foreground/70 shadow-soft"
                >
                  <span className="text-accent/80">•</span> {area}
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-border/60 bg-accent/10 px-4 py-2">
              <p className="text-xs font-semibold text-foreground">
                {profile.focusSummary}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {profile.openRoles.map((role) => (
              <Tag key={role} className="shrink-0">
                {role}
              </Tag>
            ))}
          </div>
          <div className="hidden flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50 sm:flex sm:text-xs">
            <Link href="/#projects" className="hover:text-foreground">
              Featured projects
            </Link>
            <Link href="/#stack" className="hover:text-foreground">
              Tech stack
            </Link>
          </div>
        </Reveal>
        <Reveal
          direction="right"
          delay={120}
          className="relative hidden space-y-5 rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/80 to-background/80 p-6 shadow-soft backdrop-blur md:block sm:space-y-6 sm:p-8"
        >
          <div
            className="pointer-events-none absolute -right-6 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-6 bottom-6 h-24 w-24 rounded-full bg-foreground/5 blur-2xl"
            aria-hidden="true"
          />
          <ProfileImage className="hidden md:block mx-auto" />
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
              <span className="h-px w-10 bg-accent/70" />
              Focus
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {(profile.focusHighlights?.length
                ? profile.focusHighlights
                : profile.focusAreas
              ).map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm font-medium text-foreground/70 shadow-soft"
                >
                  <span className="text-accent/80">•</span> {area}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-accent/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Signal
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {profile.focusSummary}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
