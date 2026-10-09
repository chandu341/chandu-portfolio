import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-token bg-surface/50 backdrop-blur-sm py-8 font-mono text-xs text-text-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-success live-dot-pulse" />
            <span className="text-text-secondary">
              cluster-status: <span className="text-success font-semibold">ALL_SYSTEMS_OPERATIONAL</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-text-secondary">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-success transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="px-2.5 py-1 rounded-lg border border-border-token bg-surface hover:border-primary/50 text-text-primary transition-colors flex items-center gap-1"
              title="Scroll to top"
            >
              <span>top</span>
              <ArrowUp className="w-3 h-3 text-primary" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-border-token/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
          <div>
            © {currentYear} {siteConfig.name} · {siteConfig.location}
          </div>
          <div className="text-text-muted">
            Crafted for reliability & scannability
          </div>
        </div>
      </div>
    </footer>
  );
};
