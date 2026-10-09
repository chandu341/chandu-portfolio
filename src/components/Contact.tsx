import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="section-pad border-t border-border-token bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Invitation */}
          <div className="lg:col-span-6 space-y-4 reveal-up">
            <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              <span>06. Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-text-primary font-display">
              Let's Discuss Opportunities & Cloud Engineering
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              I am actively looking for DevOps, Cloud, and SRE roles. Whether you have an open opportunity or want to discuss AWS, Azure, Kubernetes (EKS/AKS), and Infrastructure as Code architecture, feel free to reach out directly via phone, email, or LinkedIn.
            </p>

            {/* Quick Status Pill */}
            <div className="pt-2 flex items-center gap-2 font-mono text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-success live-dot-pulse" />
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Location: {siteConfig.location} · Immediate to short notice</span>
              </span>
            </div>
          </div>

          {/* Right Column: Contact Terminal Box */}
          <div className="lg:col-span-6 reveal-up">
            <div className="card-terminal p-6 sm:p-8 bg-surface border border-border-token space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border-token font-mono text-xs text-text-muted">
                <span>DIRECT CHANNELS</span>
                <span className="text-primary">// READY TO CONNECT</span>
              </div>

              {/* Direct Mobile Phone Row */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-text-muted flex items-center justify-between">
                  <span>Mobile / Phone</span>
                  <span className="text-success text-[11px] font-semibold">Direct Call Available</span>
                </label>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex-1 p-3 rounded-lg bg-surface-elevated border border-border-token font-mono text-xs sm:text-sm text-text-primary font-semibold hover:border-success/50 hover:text-success transition-colors flex items-center justify-between group"
                    title="Click to call directly"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-success" />
                      <span>{siteConfig.phone}</span>
                    </span>
                    <span className="text-text-muted group-hover:text-success transition-colors text-xs font-normal flex items-center gap-0.5">
                      <span>call</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="p-3 rounded-lg border border-border-token bg-surface hover:border-primary/50 text-text-secondary hover:text-text-primary transition-colors font-mono text-xs whitespace-nowrap flex items-center gap-1.5"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-success" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Email Row */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-text-muted">Email Address</label>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex-1 p-3 rounded-lg bg-surface-elevated border border-border-token font-mono text-xs sm:text-sm text-primary font-semibold hover:border-primary/50 transition-colors flex items-center justify-between group"
                    title="Send an email"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span className="truncate">{siteConfig.email}</span>
                    </span>
                    <span className="text-text-muted group-hover:text-primary transition-colors text-xs font-normal shrink-0 ml-2 flex items-center gap-0.5">
                      <span>mailto</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-3 rounded-lg border border-border-token bg-surface hover:border-primary/50 text-text-secondary hover:text-text-primary transition-colors font-mono text-xs whitespace-nowrap flex items-center gap-1.5"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-success" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2 grid grid-cols-2 gap-2.5 font-mono text-xs">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border-token bg-surface-elevated hover:border-secondary hover:text-secondary transition-colors text-center text-text-primary flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-secondary" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border-token bg-surface-elevated hover:border-primary hover:text-primary transition-colors text-center text-text-primary flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-primary" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
