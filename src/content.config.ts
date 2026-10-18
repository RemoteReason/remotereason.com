import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Posts live in `posts/<year>/<month>-<day>-<id>.md`; the URL id is the part after the date.
const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
    generateId: ({ entry }) => entry.replace(/^\d{4}\/\d{2}-\d{2}-/, "").replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = { posts };
