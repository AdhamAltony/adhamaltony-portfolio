'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../../../data/profile';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';

export default function ContactLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch (error) {
      const input = document.createElement('input');
      input.value = profile.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
    }

    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Reveal
      direction="up"
      delay={80}
      className="mx-auto w-full max-w-[520px] md:mx-0 md:max-w-none"
    >
      <Card className="w-full space-y-6 text-center sm:text-left">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Contact details</h2>
          <p className="text-sm text-foreground/70">
            Reach out directly to discuss your idea, scope, and timeline.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-foreground/80 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/80 bg-background/80 p-4 text-center transition duration-300 hover:border-accent/60 hover:bg-card/90 sm:flex-row sm:items-start sm:text-left">
            <span className="rounded-full bg-accent/15 p-2 text-accent sm:mt-0.5">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="break-all">{profile.email}</p>
              <p className="break-all text-xs text-foreground/60">
                {profile.emailAlt}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/80 bg-background/80 p-4 text-center transition duration-300 hover:border-accent/60 hover:bg-card/90 sm:flex-row sm:items-start sm:text-left">
            <span className="rounded-full bg-accent/15 p-2 text-accent sm:mt-0.5">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Location</p>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button href={`mailto:${profile.email}`} variant="outline" className="w-full">
            Mailto
          </Button>
          <Button onClick={handleCopy} variant="outline" className="w-full">
            {copied ? 'Copied' : 'Copy email'}
          </Button>
          <Button href={profile.resumeUrl} variant="outline" download className="w-full">
            Download CV
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            href={profile.socials.find((s) => s.label === 'LinkedIn')?.href}
            variant="ghost"
            className="w-full"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            href={profile.socials.find((s) => s.label === 'GitHub')?.href}
            variant="ghost"
            className="w-full"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </Card>
    </Reveal>
  );
}
