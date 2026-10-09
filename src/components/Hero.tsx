import React, { useState } from 'react';
import { siteConfig, impactMetrics } from '../config/site';
import { TiltCard } from './TiltCard';
import { ParticleField } from './ParticleField';
import { Download, ArrowDown, User } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background-secondary/60">
      {/* Background Layered Ambient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-secondary-glow via-primary-glow to-secondary-glow blur-[140px] rounded-full pointer-events-none z-0 ambient-glow-primary" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[300px] bg-gradient-to-br from-primary-glow via-secondary-glow to-primary-glow blur-[120px] rounded-full pointer-events-none z-0 ambient-glow-secondary" />
      <ParticleField />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Persona & Core Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-token bg-surface/90 backdrop-blur-sm text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-success live-dot-pulse" />
              <span className="text-text-muted">status:</span>
              <span className="text-text-primary font-medium">{siteConfig.availability}</span>
            </div>

            {/* Main Headline & Typography Hierarchy */}
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                <span>CLOUD INFRASTRUCTURE · CI/CD · KUBERNETES · OBSERVABILITY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
                {siteConfig.name}
              </h1>
              <p className="font-mono text-base sm:text-lg text-primary font-semibold">
                {siteConfig.role} <span className="text-text-muted font-normal">· {siteConfig.experienceYears} · {siteConfig.location}</span>
              </p>
            </div>

            {/* Short, direct summary */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-sans">
              {siteConfig.tagline}
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Resume Download Button */}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-xl font-mono text-xs sm:text-[13px] font-bold text-white bg-primary hover:bg-primary-bright border border-primary/40 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* View Experience anchor */}
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-4 sm:px-5 rounded-xl font-mono text-xs sm:text-[13px] font-medium border border-border-token bg-surface hover:border-primary/50 text-text-primary transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Experience</span>
                <ArrowDown className="w-4 h-4 text-text-muted shrink-0" />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl border border-border-token bg-surface hover:border-secondary hover:text-secondary text-text-primary transition-all flex items-center justify-center shrink-0 hover:scale-[1.04] active:scale-[0.96]"
                >
                  <LinkedinIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl border border-border-token bg-surface hover:border-primary hover:text-primary text-text-primary transition-all flex items-center justify-center shrink-0 hover:scale-[1.04] active:scale-[0.96]"
                >
                  <GithubIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Mouse-Tilt Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TiltCard maxTilt={8} className="relative group">
              {/* Ambient accent glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-secondary-glow via-primary-glow to-secondary-glow blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-primary/40 bg-surface shadow-2xl shadow-black/30 transition-all duration-300 [transform:translateZ(25px)]">
                {!imgError ? (
                  <img
                    src="/profile-image.jpeg"
                    alt="Chandu Venna, DevOps & Cloud Engineer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-surface-elevated text-text-muted p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary-glow border border-primary/30 flex items-center justify-center text-primary font-mono mb-3">
                      <User className="w-10 h-10" />
                    </div>
                    <span className="font-semibold text-text-primary text-sm">{siteConfig.name}</span>
                    <span className="text-xs text-text-muted font-mono mt-1">{siteConfig.title}</span>
                  </div>
                )}
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Impact Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {impactMetrics.map((m) => (
            <div
              key={m.label}
              className="p-4 sm:py-5 sm:px-4 rounded-xl border border-border-token bg-surface/85 backdrop-blur-sm card-terminal flex flex-col justify-between"
            >
              <div className="font-extrabold text-2xl sm:text-3xl text-primary font-mono tracking-tight">
                {m.value}
              </div>
              <div className="mt-1.5">
                <div className="text-xs sm:text-sm font-bold text-text-primary font-sans">{m.label}</div>
                <div className="text-[11px] sm:text-xs text-text-muted line-clamp-1 mt-0.5">{m.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
