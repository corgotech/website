import { z, defineCollection } from "astro:content";

export const collections = {
  work: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        client: z.string(),
        tags: z.array(z.string()),
        image: image(),
        date: z.date(),
        featured: z.boolean().optional(),
      }),
  }),
};
