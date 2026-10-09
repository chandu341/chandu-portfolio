import React from 'react';
import { experiences } from '../config/site';
import { TechIcon } from './TechIcon';
import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-pad border-t border-border-token bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3 reveal-up">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            <span>02. Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
            Career Timeline & Production Roles
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Hands-on DevOps, Cloud Migration, and Kubernetes engineering roles. Every metric reflects real production systems.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.dates}`}
              className="card-terminal p-6 sm:p-8 bg-surface border border-border-token relative overflow-hidden reveal-up"
            >
              {/* Top Accent line for current role */}
              {index === 0 && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-success" />
              )}

              {/* Role Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border-token">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-display">
                        {exp.role}
                      </h3>
                    </div>
                    {exp.client && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-primary-glow text-primary border border-primary/30">
                        Client: {exp.client}
                      </span>
                    )}
                    {index === 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-success-glow text-success border border-success/30">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-text-secondary">
                    <span className="flex items-center gap-1.5 font-semibold text-text-primary">
                      <Building2 className="w-4 h-4 text-text-muted" />
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-text-muted">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted px-3 py-1.5 rounded-lg bg-surface-elevated border border-border-token self-start whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{exp.dates}</span>
                </div>
              </div>

              {/* Bullet Points with styled list items */}
              <div className="py-6">
                <ul className="space-y-3 text-sm sm:text-base text-text-secondary">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-sm shadow-primary/40" />
                      <span className="leading-relaxed font-sans">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Footer */}
              <div className="pt-4 border-t border-border-token/60 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-text-muted mr-1">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-elevated border border-border-token text-text-primary hover:border-primary/40 transition-colors"
                  >
                    <TechIcon name={tech} size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
