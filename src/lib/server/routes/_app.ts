import { db } from '$lib/db';
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const appRouter = router({
	greeting: publicProcedure
		.input(
			z.object({
				name: z.string().optional(),
			})
		)
		.query(async ({ input }) => {
			const res = await db
				.selectFrom('Example')
				.select(['Example.id'])
				.executeTakeFirst();
			return `Hello, ${(input.name! + res!.id!) ?? 'world'}!`;
		}),
});

export type AppRouter = typeof appRouter;
