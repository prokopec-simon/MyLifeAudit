import type { LayoutLoad } from './$types';
import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';
import type { Session } from '@auth/core/types';
import type { TRPCSSRData } from 'trpc-svelte-query/ssr';

export const load: LayoutLoad<{
	locale: Locales;
	session: Session;
	trpc: TRPCSSRData;
}> = async (event) => {
	await loadLocaleAsync(event.data.locale);
	const trpc = event.data.trpc;
	setLocale(event.data.locale);

	return {
		locale: event.data.locale,
		trpc: trpc,
		session: await event.data.session,
	};
};
