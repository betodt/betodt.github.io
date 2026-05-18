import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://betodt.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
