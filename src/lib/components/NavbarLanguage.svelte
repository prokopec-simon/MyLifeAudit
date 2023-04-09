<script lang="ts">
	import Dropdown from '../components/DropdownMenu.svelte';
	import { writable } from 'svelte/store';
	import { setLocale, locale } from '../../i18n/i18n-svelte';

	const languageStore = writable({
		languageOptions: [
			{
				id: 1,
				value: 'English',
				icon: '/icons/en_round.svg',
				onClick: () => {
					setLocale('en');
				},
			},
			{
				id: 2,
				value: 'Česky',
				icon: '/icons/cz_round.svg',
				onClick: () => {
					setLocale('de');
				},
			},
		],
		selectedOption: '',
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
	bind:selectedOption={$languageStore.selectedOption}
	bind:isOpen={$languageStore.isOpen}
/>
