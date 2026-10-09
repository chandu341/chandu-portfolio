export type ThemeId = 'dark' | 'ocean';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  isDark: boolean;
  bgHex: string;
  primaryHex: string;
  secondaryHex: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'dark',
    name: 'Charcoal Navy',
    isDark: true,
    bgHex: '#0a0e1a',
    primaryHex: '#3b82f6',
    secondaryHex: '#14b8a6',
    description: 'Charcoal Navy · Blue & Teal (Dark)'
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    isDark: false,
    bgHex: '#f8fafc',
    primaryHex: '#2563eb',
    secondaryHex: '#0ea5e9',
    description: 'Ocean Blue · Deep Cobalt (Light)'
  }
];
