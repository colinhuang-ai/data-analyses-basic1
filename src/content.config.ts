import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessonsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    session: z.number().min(1).max(5),
    type: z.enum(['theory', 'lab', 'quiz']),
    order: z.number()
  }),
});

const solutionsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/solutions' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    session: z.number().min(1).max(5),
    type: z.enum(['lab-solution', 'quiz-solution']),
  }),
});

export const collections = {
  lessons: lessonsCollection,
  solutions: solutionsCollection,
};
