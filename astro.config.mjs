import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/arabica-coffee-house-grand-majidi-mall/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://arabica-coffee-house-grand-majidi-mall.netlify.app',
  vite: {
    css: {
      postcss: {
        plugins: [
          (await import('tailwindcss')).default,
          (await import('autoprefixer')).default,
        ],
      },
    },
  },
});