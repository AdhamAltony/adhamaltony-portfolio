import { profile } from '../../../data/profile';
import { getToolIcon } from '../../../lib/toolIcons';
import Reveal from '../../ui/Reveal';
import SectionHeader from '../../ui/SectionHeader';
import Container from '../../layout/Container';
import Tag from '../../ui/Tag';

export default function ExperienceSection() {
  return (
    <section className="py-14 sm:py-16" aria-labelledby="experience-title">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow="Timeline"
            title="Milestones"
            titleId="experience-title"
            subtitle="Complete, chronological milestones across education, client delivery, and AI product work."
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <ol className="relative space-y-8 border-l border-border/60 pl-12 sm:pl-14">
            {profile.experience.map((item, index) => {
              const isCurrent = item.date.toLowerCase().includes('present');

              return (
                <Reveal key={`${item.title}-${item.org}`} delay={index * 90}>
                  <li className="relative">
                    <span className="absolute -left-12 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-xs font-semibold text-foreground/70 shadow-soft sm:-left-14">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1">
                          {item.date}
                        </span>
                        {isCurrent ? (
                          <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-accent">
                            Now
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-foreground/60">{item.org}</p>
                      </div>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
          <Reveal direction="right" delay={120}>
            <div className="rounded-[32px] border border-border/50 bg-gradient-to-br from-background/80 via-background/60 to-accent/10 p-6 shadow-soft">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                    Toolkit
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.topSkills.slice(0, 12).map((skill) => {
                      const Icon = getToolIcon(skill);
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/70"
                        >
                          <Icon className="h-3.5 w-3.5 text-accent" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="border-t border-border/60 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                    How I work
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                    {profile.strengths.map((strength) => (
                      <li key={strength} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border/60 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                    Open to
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.openRoles.map((role) => (
                      <Tag key={role}>{role}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
