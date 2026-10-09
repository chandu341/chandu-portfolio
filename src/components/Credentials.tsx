import React from 'react';
import { certifications, achievements, education } from '../config/site';
import { Award, Trophy, GraduationCap, Star, BadgeCheck } from 'lucide-react';

export const Credentials: React.FC = () => {
  return (
    <section id="certifications" className="section-pad border-t border-border-token bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3 reveal-up">
          <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            <span>05. Certifications & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
            Certifications & Education
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Professional certifications, performance recognition, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Certifications */}
          <div className="card-terminal p-6 bg-surface border border-border-token space-y-4 reveal-up">
            <div className="flex items-center gap-3 pb-3 border-b border-border-token">
              <span className="p-2 rounded-lg bg-primary-glow border border-primary/20 text-primary">
                <Award className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-text-primary font-display">Certifications</h3>
                <span className="text-[11px] font-mono text-text-muted">Verified Credentials</span>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-3.5 rounded-lg bg-surface-elevated border border-border-token space-y-1.5"
                >
                  <div className="font-semibold text-sm text-text-primary flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{cert.title}</span>
                  </div>
                  <div className="font-mono text-xs text-primary pl-6">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Achievements / Recognition */}
          <div className="card-terminal p-6 bg-surface border border-border-token space-y-4 reveal-up">
            <div className="flex items-center gap-3 pb-3 border-b border-border-token">
              <span className="p-2 rounded-lg bg-warning/15 border border-warning/20 text-warning">
                <Trophy className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-text-primary font-display">Recognition</h3>
                <span className="text-[11px] font-mono text-text-muted">Client & Team Awards</span>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-surface-elevated border border-border-token space-y-1 text-xs sm:text-sm text-text-secondary leading-relaxed"
                >
                  <div className="flex items-start gap-2.5">
                    <Star className="w-4 h-4 text-warning fill-warning/20 shrink-0 mt-0.5" />
                    <span className="font-sans">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Education */}
          <div className="card-terminal p-6 bg-surface border border-border-token space-y-4 flex flex-col justify-between reveal-up">
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-border-token mb-4">
                <span className="p-2 rounded-lg bg-secondary-glow border border-secondary/20 text-secondary">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-text-primary font-display">Education</h3>
                  <span className="text-[11px] font-mono text-text-muted">Academic Degree</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface-elevated border border-border-token space-y-2">
                <div className="font-bold text-sm text-text-primary font-display">
                  {education.degree}
                </div>
                <div className="text-xs text-text-secondary">
                  {education.institution} · {education.location}
                </div>
                <div className="pt-2 font-mono text-xs text-primary font-semibold">
                  Graduation: {education.graduationDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
