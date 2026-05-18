import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    outcomes: z.array(z.string()),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { work, notes };
