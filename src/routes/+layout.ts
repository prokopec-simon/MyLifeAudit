import type { LayoutLoad } from './$types';
import type { Locales } from '../i18n/i18n-types';
import { loadLocaleAsync } from '../i18n/i18n-util.async';
import LL, { setLocale } from '../i18n/i18n-svelte';
import { get } from 'svelte/store';

export const load: LayoutLoad = async (event) => {
	let locales = event.data.locale;

	console.log('Locale is:', locales);
	if (locales == undefined) {
		locales = 'en';
	}
	await loadLocaleAsync(locales);

	setLocale(locales);

	return {
		trpc: event.data.trpc,
		session: await event.data.session,
		locales,
	};
};
