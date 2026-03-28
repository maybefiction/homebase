import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://maybefiction.github.io',
  base: '/homebase',
  integrations: [react()],
});
