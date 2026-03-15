import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().max(160),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		author: z.string().default('Cherrypick Studio'),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		tags: z.array(z.string()),
		category: z.enum([
			'Panduan Website',
			'Harga & Paket',
			'SEO & Marketing',
			'UMKM & Bisnis',
			'Tutorial',
		]),
		featured: z.boolean().default(false),
	}),
});

export const collections = {
	blog: blogCollection,
};
