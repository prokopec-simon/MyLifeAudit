import { trpc } from '$lib/trpc';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const locales = event.locals.locale;
	return {
		trpc: trpc.ssr(event),
		session: await event.locals.getSession(),
		locale: locales,
	};
};
