<script lang="ts">
	import Dropdown from '../components/DropdownMenu.svelte';
	import { writable } from 'svelte/store';
	import { setLocale, locale } from '../../i18n/i18n-svelte';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { replaceLocaleInUrl } from '../../utils';

	const switchLocale = async (
		newLocale: Locales,
		updateHistoryState = true
	) => {
		if (!newLocale || $locale === newLocale) return;

		await loadLocaleAsync(newLocale);
		setLocale(newLocale);
		document.querySelector('html').setAttribute('lang', newLocale);

		if (updateHistoryState) {
			history.pushState(
				{ locale: newLocale },
				'',
				replaceLocaleInUrl($page.url, newLocale)
			);
		}

		invalidateAll();
	};

	const handlePopStateEvent = async ({ state }: PopStateEvent) =>
		switchLocale(state.locale, false);
	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}

	const languageStore = writable({
		languageOptions: [
			{
				id: 1,
				value: 'English',
				icon: '/icons/en_round.svg',
				onClick: () => {
					switchLocale('en');
				},
			},
			{
				id: 2,
				value: 'Česky',
				icon: '/icons/cz_round.svg',
				onClick: () => {
					switchLocale('cs');
				},
			},
		],
		isOpen: false,
	});

	function toggleLanguageDropdown() {
		languageStore.update((store) => {
			return { ...store, isOpen: !store.isOpen };
		});
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<button
	class="bg-accent rounded px-4 py-2 text-white"
	on:click={toggleLanguageDropdown}
>
	{$locale}
</button>
<Dropdown
	bind:options={$languageStore.languageOptions}
	bind:isOpen={$languageStore.isOpen}
/>
