/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Stoutwall palette — charcoal slate base, warm amber for action.
        // ink-900 is the brand charcoal (#1E293B); ink-950 is the footer/hero slate.
        ink: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#273449',
          700: '#334155',
          600: '#475569',
        },
        concrete: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        },
        amber: {
          DEFAULT: '#F59E0B', // CTAs and accents (text on it is always ink)
          bright: '#FBBF24', // hover on dark backgrounds
          hover: '#D97706', // hover on light backgrounds
          deep: '#B45309', // amber *text* on white — passes AA at 4.9:1
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        rise: 'rise .6s cubic-bezier(.22,1,.36,1) both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-pulse': 'scale-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        hover: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
