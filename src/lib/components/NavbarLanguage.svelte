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
	import CircleFlagsCz from '~icons/circle-flags/cz';
	import CircleFlagsUs from '~icons/circle-flags/us';

	const icons = {
		cz: CircleFlagsCz,
		us: CircleFlagsUs,
	};
	function getIconComponent(iconName: string) {
		return icons[iconName] || null;
	}
	const localeToFlag = [
		{ locale: 'cs', flag: 'cz' },
		{ locale: 'en', flag: 'us' },
	];

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
				icon: 'us',
				onClick: () => {
					switchLocale('en');
				},
			},
			{
				id: 2,
				value: 'Česky',
				icon: 'cz',
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

<button
	class="bg-accent rounded py-2 pr-2 text-white md:pr-4"
	id="languageToggleButton"
	aria-label="toggleLanguageDropdown"
	on:click={toggleLanguageDropdown}
>
	<svelte:component
		this={getIconComponent(
			localeToFlag.find((map) => map.locale == $locale).flag
		)}
		class="mr-3"
	/>
</button>
<Dropdown
	bind:options={$languageStore.languageOptions}
	bind:isOpen={$languageStore.isOpen}
	toggleButtonRef={'#languageToggleButton'}
/>
