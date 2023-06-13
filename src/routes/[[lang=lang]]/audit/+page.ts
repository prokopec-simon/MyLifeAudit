import type { PageLoad } from './$types';
import LL, { setLocale } from '$i18n/i18n-svelte';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ parent }) => {
	const { locale, session } = await parent();

	setLocale(locale);
	const $LL = get(LL);
	return {
		title: $LL.PAGE_TITLE_AUDIT(),
		session: session,
	};
};
