/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'border-token': 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        primary: 'var(--primary)',
        'primary-glow': 'var(--primary-glow)',
        'primary-bright': 'var(--primary-bright)',
        secondary: 'var(--secondary)',
        'secondary-glow': 'var(--secondary-glow)',
        success: 'var(--success)',
        'success-glow': 'var(--success-glow)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        'chart-primary': 'var(--chart-primary)',
        'chart-secondary': 'var(--chart-secondary)'
      },
      borderRadius: {
        'token-sm': 'var(--radius-sm)',
        'token-md': 'var(--radius-md)',
        'token-lg': 'var(--radius-lg)',
        'token-xl': 'var(--radius-xl)'
      },
      transitionDuration: {
        fast: '150ms',
        normal: '220ms',
        slow: '350ms'
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow-primary': '0 0 25px var(--primary-glow)',
        'glow-secondary': '0 0 25px var(--secondary-glow)'
      }
    }
  },
  plugins: []
};
