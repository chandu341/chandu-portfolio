import React from 'react';
import { skillCategories } from '../config/site';
import { TechIcon } from './TechIcon';
import {
  Code2,
  Workflow,
  Boxes,
  Cloud,
  Cpu,
  Terminal,
  Server,
  Database,
  Activity,
  ShieldCheck,
  Users,
  Monitor,
  Bot
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Version Control & Config Management': <Code2 className="w-4 h-4 text-primary" />,
  'CI/CD & Build Automation': <Workflow className="w-4 h-4 text-primary" />,
  'Containerization & Orchestration': <Boxes className="w-4 h-4 text-primary" />,
  'Cloud Platforms': <Cloud className="w-4 h-4 text-primary" />,
  'Infrastructure as Code': <Cpu className="w-4 h-4 text-primary" />,
  'Scripting/Config Languages': <Terminal className="w-4 h-4 text-primary" />,
  'Web & Application Servers': <Server className="w-4 h-4 text-primary" />,
  'Databases': <Database className="w-4 h-4 text-primary" />,
  'Monitoring & Observability': <Activity className="w-4 h-4 text-primary" />,
  'DevSecOps': <ShieldCheck className="w-4 h-4 text-primary" />,
  'Collaboration & Project Tools': <Users className="w-4 h-4 text-primary" />,
  'Operating Systems': <Monitor className="w-4 h-4 text-primary" />,
  'AI & Automation': <Bot className="w-4 h-4 text-primary" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-pad border-t border-border-token bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3 reveal-up">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            <span>03. Skills & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
            Technical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Organized deliberately by operational domain without arbitrary percentage ratings.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            const icon = categoryIcons[group.category] || <Code2 className="w-4 h-4 text-primary" />;

            return (
              <div
                key={group.category}
                className="card-terminal p-5 sm:p-6 bg-surface border border-border-token flex flex-col justify-between reveal-up"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border-token mb-4">
                    <h3 className="font-bold text-sm text-text-primary font-display flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-primary-glow border border-primary/20">
                        {icon}
                      </span>
                      <span>{group.category}</span>
                    </h3>
                    <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface-elevated border border-border-token">
                      {group.skills.length}
                    </span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-surface-elevated border border-border-token text-text-primary hover:border-primary/50 transition-all shadow-sm"
                      >
                        <TechIcon name={skill} size={14} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
