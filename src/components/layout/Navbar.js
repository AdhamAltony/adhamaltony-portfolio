'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import Container from './Container';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const firstName = profile.name.split(' ')[0];

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          onClick={handleClose}
          className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/80 text-xs font-semibold text-foreground/70 transition duration-300 group-hover:border-accent/60 group-hover:text-foreground">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{firstName}</span>
        </Link>
        <nav className="flex items-center gap-4" aria-label="Primary">
          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground/70 transition hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent/70 after:transition after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              href={profile.resumeUrl}
              variant="outline"
              size="sm"
              download
              className="hidden sm:inline-flex"
            >
              Download CV
            </Button>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition hover:border-accent/50 hover:text-foreground md:hidden"
              onClick={handleToggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden border-t border-border/60 bg-background/95 backdrop-blur',
          open ? 'block' : 'hidden'
        )}
      >
        <Container className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="rounded-xl border border-border/60 bg-card/70 px-4 py-3 transition hover:border-accent/50 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={profile.resumeUrl}
              variant="outline"
              size="sm"
              download
              className="w-full sm:w-auto"
            >
              Download CV
            </Button>
            <Button href="/contact" variant="ghost" size="sm" className="w-full sm:w-auto">
              Contact
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
