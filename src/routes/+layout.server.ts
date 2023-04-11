import type { LayoutServerLoad } from './$types';
import { trpc } from '$lib/trpc';

export const load: LayoutServerLoad = async (event) => {
	console.log('Event:', event.locals);
	console.log('====================');

	return {
		locale: event.locals.locale,
		trpc: trpc.ssr(event),
		session: await event.locals.getSession(),
		test: '5',
	};
};
