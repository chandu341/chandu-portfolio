import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { ThemePicker } from './ThemePicker';
import { type ThemeId } from '../config/themes';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, onSelectTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['top', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border-token shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand identity: Name with live status dot */}
        <a
          href="#top"
          className="flex items-center gap-2 group font-mono text-sm tracking-tight text-text-primary focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-success live-dot-pulse" aria-hidden="true" />
          <span className="font-bold tracking-normal group-hover:text-primary transition-colors">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Navigation - Exactly 6 items */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'text-primary bg-primary-glow font-semibold border border-primary/30 shadow-sm'
                    : 'text-text-primary/80 hover:text-primary hover:bg-primary-glow/50 border border-transparent hover:border-primary/20'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right side controls: Theme Picker + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Picker Dropdown */}
          <ThemePicker currentTheme={currentTheme} onSelectTheme={onSelectTheme} />

          {/* Mobile menu hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-border-token bg-surface text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-md border-b border-border-token px-4 pt-3 pb-5 space-y-1.5 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-mono text-xs font-medium text-text-primary hover:text-primary hover:bg-primary-glow/40 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
