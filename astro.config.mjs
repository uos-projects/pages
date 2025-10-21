import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://uros-project.example.com',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
