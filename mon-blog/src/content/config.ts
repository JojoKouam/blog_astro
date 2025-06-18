// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Définir une collection pour notre blog
const blogCollection = defineCollection({
  type: 'content', // ou 'data'
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    // L'image est optionnelle
    image: z.object({
        url: z.string(),
        alt: z.string()
    }).optional(),
  }),
});

// Exporter un seul objet `collections` avec nos collections
export const collections = {
  'blog': blogCollection,
};