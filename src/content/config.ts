import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    lang: z.enum(['zh', 'en']),
    image: z.string().optional(),
  }),
});

export const collections = {
  'news': newsCollection,
};

