'use client';

import { useState } from 'react';
import { profile } from '../../../data/profile';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Reveal from '../../ui/Reveal';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio inquiry from ${form.name || 'Recruiter'}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('sent');
  };

  return (
    <Reveal direction="left" delay={60}>
      <Card className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Let us build something together</h2>
          <p className="mt-2 text-sm text-foreground/70">
            This form opens your email client with the details pre-filled.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm transition duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm transition duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm transition duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Tell me about the role, the product, and the outcomes you're aiming for."
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit">Open email draft</Button>
            <span className="text-xs text-foreground/60" aria-live="polite">
              {status === 'sent'
                ? 'Email draft opened in your client.'
                : 'No backend required.'}
            </span>
          </div>
        </form>
      </Card>
    </Reveal>
  );
}
