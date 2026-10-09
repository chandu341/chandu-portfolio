import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { type ThemeId } from '../config/themes';

export const ParticleField: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    if (typeof document !== 'undefined') {
      const dataTheme = document.documentElement.getAttribute('data-theme') as ThemeId;
      if (dataTheme === 'dark' || dataTheme === 'ocean') {
        return dataTheme;
      }
      return document.documentElement.classList.contains('dark') ? 'dark' : 'ocean';
    }
    return 'dark';
  });

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener('change', handleMotionChange);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    const updateTheme = () => {
      const dataTheme = document.documentElement.getAttribute('data-theme') as ThemeId;
      if (dataTheme === 'dark' || dataTheme === 'ocean') {
        setCurrentTheme(dataTheme);
      } else if (document.documentElement.classList.contains('dark')) {
        setCurrentTheme('dark');
      } else {
        setCurrentTheme('ocean');
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    return () => {
      mql.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (reducedMotion && container) {
      container.pause();
    }
  }, [reducedMotion]);

  // Particle count: desktop ~48, mobile ~18
  const count = isMobile ? 18 : 48;

  // Theme-specific colors & opacities
  const themeConfig = useMemo(() => {
    if (currentTheme === 'dark') {
      // Charcoal Navy (Dark)
      return {
        particleColors: ['#3b82f6', '#60a5fa', '#14b8a6', '#22d3ee'],
        linkColor: '#3b82f6',
        particleOpacity: { min: 0.35, max: 0.75 },
        linkOpacity: 0.16,
        particleSize: { min: 1.5, max: 2.6 },
        hoverLinkOpacity: 0.35,
        hoverColor: '#60a5fa'
      };
    }

    // Ocean Blue (Light)
    return {
      particleColors: ['#2563eb', '#3b82f6', '#0ea5e9', '#0284c7'],
      linkColor: '#2563eb',
      particleOpacity: { min: 0.35, max: 0.70 },
      linkOpacity: 0.18,
      particleSize: { min: 1.6, max: 2.8 },
      hoverLinkOpacity: 0.38,
      hoverColor: '#2563eb'
    };
  }, [currentTheme]);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 60,
    pauseOnOutsideViewport: true,
    particles: {
      number: {
        value: count,
        density: { enable: false },
      },
      color: {
        value: themeConfig.particleColors,
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: themeConfig.particleOpacity,
      },
      size: {
        value: themeConfig.particleSize,
      },
      links: {
        enable: true,
        color: themeConfig.linkColor,
        distance: 135,
        opacity: themeConfig.linkOpacity,
        width: 1.15,
      },
      move: {
        enable: !reducedMotion,
        speed: 0.40,
        direction: 'none' as const,
        outModes: {
          default: 'bounce' as const,
        },
        straight: false,
      },
    },
    interactivity: {
      detectsOn: 'window' as const,
      events: {
        onHover: {
          enable: !reducedMotion && !isMobile,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 130,
          links: {
            opacity: themeConfig.hoverLinkOpacity,
            color: themeConfig.hoverColor,
          },
        },
      },
    },
    detectRetina: true,
  }), [count, reducedMotion, isMobile, themeConfig]);

  return (
    <ParticlesProvider init={init}>
      <Particles
        key={`particles-${currentTheme}`}
        id="hero-particles"
        className="absolute inset-0 pointer-events-none z-0"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
};
