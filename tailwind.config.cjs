/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#030303',
          900: '#070707',
          850: '#0d0c0a',
          800: '#171715',
          750: '#1a1614',
          700: '#221a14',
          600: '#2C1A11',
          500: '#6E3E22',
          400: '#C69B6E',
        },
        amber: {
          600: '#B07A45',
          500: '#D58C3D',
          400: '#E0A356',
          300: '#EDBD7A',
        },
        bone: {
          50: '#FAF9F7',
          100: '#F1F1EF',
          200: '#E7E5E3',
          300: '#EAE6DF',
          400: '#D5D1CC',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        snug: '-0.01em',
      },
      lineHeight: {
        tighter: '0.9',
        tight: '1.0',
        snug: '1.1',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'fill-up': 'fillUp 2.2s ease-out forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'wipe-right': 'wipeRight 1s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        fillUp: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(110%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wipeRight: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};