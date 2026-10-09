import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { type ThemeId } from '../config/themes';

interface ThemePickerProps {
  currentTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
  className?: string;
  compact?: boolean;
}

export const ThemePicker: React.FC<ThemePickerProps> = ({
  currentTheme,
  onSelectTheme,
  className = '',
  compact = false
}) => {
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    const nextTheme: ThemeId = isDark ? 'ocean' : 'dark';
    onSelectTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Dark theme active. Click to switch to light mode' : 'Light theme active. Click to switch to dark mode'}
      title={isDark ? 'Dark Theme (Click for Light)' : 'Light Theme (Click for Dark)'}
      className={`group relative flex items-center justify-center rounded-xl border border-border-token bg-surface hover:border-primary/50 text-text-primary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-sm hover:scale-[1.04] active:scale-[0.96] ${
        compact ? 'w-9 h-9' : 'w-9 h-9 sm:w-10 sm:h-10'
      } ${className}`}
    >
      {/* Moon for Dark theme, Sun for Light theme */}
      {isDark ? (
        <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary transition-transform duration-300 group-hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  );
};
