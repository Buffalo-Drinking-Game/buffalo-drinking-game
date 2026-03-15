// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://buffalodrinkinggame.com',
  base: '/',
  integrations: [react()],
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});