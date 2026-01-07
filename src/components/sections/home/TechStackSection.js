import { Brain, Cloud, Code2, Database, Server } from 'lucide-react';
import { profile } from '../../../data/profile';
import { getToolIcon } from '../../../lib/toolIcons';
import Card from '../../ui/Card';
import SectionHeader from '../../ui/SectionHeader';
import Reveal from '../../ui/Reveal';
import Container from '../../layout/Container';

const iconMap = {
  code: Code2,
  server: Server,
  database: Database,
  brain: Brain,
  cloud: Cloud,
};

export default function TechStackSection() {
  return (
    <section
      className="relative border-y border-border/60 bg-muted/30 py-14 sm:py-16"
      aria-labelledby="tech-stack-title"
      id="stack"
    >
      <Container>
        <Reveal direction="left">
          <SectionHeader
            eyebrow="Toolkit"
            title="Tech stack"
            titleId="tech-stack-title"
            subtitle="Tools I use to scope, build, and deploy full-stack products with AI when it adds value."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {profile.techStack.map((group, index) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <Reveal key={group.label} delay={index * 90}>
                <Card className="group space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 p-2 text-accent transition duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const ItemIcon = getToolIcon(item);
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/70"
                        >
                          <ItemIcon className="h-3.5 w-3.5 text-accent" />
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
