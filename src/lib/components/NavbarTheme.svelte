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
	import MdiCheckboxBlankCircle from '~icons/mdi/checkbox-blank-circle';

	function changeColorTheme(newTheme: string) {
		const themePrefix = 'theme-';
		const currentTheme = document.documentElement.className
			.split(' ')
			.find((className) => className.startsWith(themePrefix));
		if (currentTheme) {
			document.documentElement.classList.remove(currentTheme);
		}
		if (newTheme !== '') {
			document.documentElement.classList.add(`${themePrefix}${newTheme}`);
		}
	}

	const languageStore = writable({
		languageOptions: [
			{
				id: 1,
				icon: 'circle',
				value: 'Light',
				color: 'steelblue',
				onClick: () => {
					changeColorTheme('light');
				},
			},
			{
				id: 2,
				icon: 'circle',
				value: 'Dark',
				color: '#2A9D8F',
				onClick: () => {
					changeColorTheme('dark');
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
	class="bg-accent rounded px-4 py-2 text-white"
	on:click={toggleLanguageDropdown}
>
	<MdiCheckboxBlankCircle color="hsl(var(--twc-primary))" />
</button>
<Dropdown
	bind:options={$languageStore.languageOptions}
	bind:isOpen={$languageStore.isOpen}
/>
