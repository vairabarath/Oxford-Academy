import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        teal: {
          DEFAULT: '#0FB5B0',
          dark: '#0A8A86',
          deeper: '#076966',
        },
        royal: '#1E5BBA',
        magenta: {
          DEFAULT: '#E91E63',
          dark: '#C1144D',
        },
        gold: '#FFC107',
        ink: {
          DEFAULT: '#1A1A2E',
          soft: '#4A4A5E',
          mute: '#7A7A8E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'ui-sans-serif', 'cursive'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,20,40,0.04), 0 8px 28px -12px rgba(30,91,186,0.14)',
        lift: '0 1px 2px rgba(20,20,40,0.04), 0 22px 44px -18px rgba(15,181,176,0.30)',
        cta: '0 8px 22px -8px rgba(233,30,99,0.48)',
        ctaHi: '0 14px 30px -10px rgba(233,30,99,0.55)',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
    },
  },
  plugins: [],
} satisfies Config;
