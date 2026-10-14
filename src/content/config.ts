import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string(),
    /** Describes what's in the cover photo, for screen readers and search engines */
    coverImageAlt: z.string(),
    featured: z.boolean().optional()
  })
});

export const collections = { blog };
