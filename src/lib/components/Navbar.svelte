<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import Dropdown from '../components/DropdownMenu.svelte';
	import { writable } from 'svelte/store';
	import { theme } from '../../stores/theme';
	import { setLocale, locale, LL } from '../../i18n/i18n-svelte';
	import englishIcon from '../../../static/icons/en_round.svg';
	import czechIcon from '../../../static/icons/cz_round.svg';

	let selectedLanguage = ''; // Store the selected language

	const languageStore = writable({
		languageOptions: [
			{
				id: 1,
				value: 'English',
				icon: '/icons/en_round.svg', // Assign the SVG icon as a string to the 'icon' property
				onClick: () => {
					setLocale('en');
				},
			},
			{
				id: 2,
				value: 'Česky',
				icon: '/icons/cz_round.svg', // Assign the SVG icon as a string to the 'icon' property
				onClick: () => {
					setLocale('de');
				},
			},
		],
		selectedOption: '',
		isOpen: false,
	});

	const changeTheme = (newTheme: string) => {
		theme.set(newTheme);
	};

	let session = $page.data.session;

	let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const dropdownStore = writable({
		options: [
			{
				id: 1,
				value: 'My profile',
				onClick: () => console.log('Option 1 clicked'),
			},
			{
				id: 2,
				value: 'My progress',
				onClick: () => console.log('Option 2 clicked'),
			},
			{ id: 3, value: 'Sign Off', onClick: () => signOut() },
		],
		selectedOption: '',
		isOpen: false,
	});

	const navigationOptions = [
		{ title: 'About', link: '/about' },
		{ title: 'Join us', link: '/join-us' },
		{ title: 'Resources', link: '/resources' },
		{ title: 'Contact', link: '/contact' },
	];

	function toggleLanguageSelection() {
		languageStore.update((store) => {
			return { ...store, isOpen: !store.isOpen };
		});
	}

	function toggleDropdown() {
		dropdownStore.update((store) => {
			return { ...store, isOpen: !store.isOpen };
		});
	}
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>

<nav class="fixed top-0 z-50 flex h-20 w-full bg-gray-800">
	<div class="ml-4 flex flex-1 items-center">
		<button
			class="mr-4 text-2xl font-bold focus:outline-none md:hidden"
			on:click={toggleMenu}
		>
			<span
				class="mb-1 block h-1 w-6 transform bg-white transition duration-500 ease-in-out"
				class:rotate-45={isMenuOpen}
				class:-translate-y-1.5={isMenuOpen}
				class:rotate-0={!isMenuOpen}
				class:translate-y-0={!isMenuOpen}
			/>
			<span
				class="mb-1 block h-1 w-6 bg-white opacity-0 transition duration-500 ease-in-out"
				class:opacity-100={isMenuOpen}
			/>
			<span
				class="mb-0 block h-1 w-6 transform bg-white transition duration-500 ease-in-out"
				class:-rotate-45={isMenuOpen}
				class:translate-y-1.5={isMenuOpen}
				class:rotate-0={!isMenuOpen}
				class:-translate-y-0={!isMenuOpen}
			/>
		</button>
		<div class="hidden md:flex md:items-center">
			{#each navigationOptions as option (option.title)}
				<a href={option.link} class="ml-4 text-white">{option.title}</a>
			{/each}
		</div>
	</div>
	<div class="flex flex-1 items-center justify-center" />
	<div class="mr-4 flex flex-1 items-center justify-end">
		<button
			class="rounded bg-accent px-4 py-2 text-white"
			on:click={toggleLanguageSelection}
		>
			{$locale}
		</button>
		<Dropdown
			bind:options={$languageStore.languageOptions}
			bind:selectedOption={$languageStore.selectedOption}
			bind:isOpen={$languageStore.isOpen}
		/>
		<!-- {$locale} -->
		{#if session}
			<span class="flex items-center text-white">
				<p class="max-w-xs truncate">{session.user?.name}</p>
				<button
					class="ml-2 cursor-pointer border-none bg-none"
					on:click={toggleDropdown}
				>
					<i class="fas fa-chevron-down" />
				</button>
			</span>
			<Dropdown
				bind:options={$dropdownStore.options}
				bind:selectedOption={$dropdownStore.selectedOption}
				bind:isOpen={$dropdownStore.isOpen}
			/>
		{:else}
			<button on:click={() => signIn()} class="button">Sign In</button>
		{/if}
	</div>
</nav>
{#if isMenuOpen}
	<div
		class="menu-transition fixed left-0 top-16 h-full w-32 transform bg-gray-800 p-4 text-white transition duration-500 ease-in-out"
		class:translate-x-0={isMenuOpen}
		class:translate-x-full={!isMenuOpen}
	>
		<ul class="space-y-2">
			{#each navigationOptions as option (option.title)}
				<li>
					<a class="hover:text-gray-400" href={option.link}>{option.title}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
