import type { LayoutServerLoad } from './$types';
import { trpc } from '$lib/trpc';

export const load: LayoutServerLoad = async (event) => {
	return {
		locale: event.locals.locale,
		trpc: trpc.ssr(event),
		session: await event.locals.getSession(),
	};
};
