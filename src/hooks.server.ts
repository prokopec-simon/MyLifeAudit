import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import type { Provider } from '@auth/core/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { Adapter } from '@auth/core/adapters';
import { prisma } from './lib/server/prisma';

// const prisma = new PrismaClient();

export const handle = SvelteKitAuth({
	//adapter: PrismaAdapter(prisma) as Adapter,

	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID();
		},
	},
	providers: [
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
	] as Provider[],
});
