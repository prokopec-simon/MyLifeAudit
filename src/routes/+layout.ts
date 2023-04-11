import type { LayoutLoad } from './$types';
import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import LL, { setLocale } from '$i18n/i18n-svelte';
import { get } from 'svelte/store';

export const load: LayoutLoad<{ locale: Locales }> = async (event) => {
	// load dictionary into memory
	await loadLocaleAsync(event.data.locale);
	const trpc = event.data.trpc;
	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(event.data.locale);
	// get the translation functions value from the store
	const $LL = get(LL);
	console.info($LL.log({ fileName: '+layout.ts' }));

	// pass locale to the "rendering context"
	return {
		locale: event.data.locale,
		trpc: trpc,
		session: await event.data.session,
	};
};
