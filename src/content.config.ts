import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        description: z.string().optional(),
        cover: z
          .object({
            image: z.union([image(), z.string()]),
            alt: z.string().optional(),
            caption: z.string().optional(),
            relative: z.boolean().optional(),
            responsiveImages: z.boolean().optional(),
            hiddenInList: z.boolean().optional(),
            hiddenInSingle: z.boolean().optional(),
          })
          .optional(),
      })
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, pages };