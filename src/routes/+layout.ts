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
	// load dictionary into memory
	await loadLocaleAsync(event.data.locale);
	const trpc = event.data.trpc;
	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(event.data.locale);
	// get the translation functions value from the store
	//console.info($LL.log({ fileName: '+layout.ts' }));

	// pass locale to the "rendering context"
	return {
		locale: event.data.locale,
		trpc: trpc,
		session: await event.data.session,
	};
};
