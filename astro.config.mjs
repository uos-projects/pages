import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://uros-project.example.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
