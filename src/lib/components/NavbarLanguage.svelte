<script lang="ts">
	import Dropdown from '../components/DropdownMenu.svelte';
	import { writable } from 'svelte/store';
	import { setLocale, locale } from '../../i18n/i18n-svelte';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { invalidateAll } from '$app/navigation';

	const switchLocale = async (
		newLocale: Locales,
		updateHistoryState = true
	) => {
		if (!newLocale || $locale === newLocale) return;
    
		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		// update `lang` attribute

		// run the `load` function again
		invalidateAll();
	};

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

<button
	class="rounded bg-accent px-4 py-2 text-white"
	on:click={toggleLanguageDropdown}
>
	{$locale}
</button>
<Dropdown
	bind:options={$languageStore.languageOptions}
	bind:isOpen={$languageStore.isOpen}
/>
