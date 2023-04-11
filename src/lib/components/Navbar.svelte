<script lang="ts">
	import NavbarLanguage from './NavbarLanguage.svelte';
	import NavbarProfile from './NavbarProfile.svelte';
	import LL from '../../i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';

	let isSidePanelMenuOpen = false;
	function toggleSidePanelMenu() {
		isSidePanelMenuOpen = !isSidePanelMenuOpen;
	}

	let about = $LL.NAV_ABOUT();
	let navigationOptions = [
		{ title: 'NAV_ABOUT', link: '/about' },
		{ title: 'NAV_JOIN_US', link: '/join-us' },
		{ title: 'NAV_RESOURCES', link: '/resources' },
		{ title: 'NAV_CONTACT', link: '/contact' },
	];
</script>

<nav class="fixed top-0 z-50 flex h-20 w-full bg-gray-800">
	<div class="ml-4 flex flex-1 items-center">
		<button
			class="mr-4 text-2xl font-bold focus:outline-none md:hidden"
			on:click={toggleSidePanelMenu}
		>
			<span
				class="mb-1 block h-1 w-6 transform bg-white transition duration-500 ease-in-out"
				class:rotate-45={isSidePanelMenuOpen}
				class:-translate-y-1.5={isSidePanelMenuOpen}
				class:rotate-0={!isSidePanelMenuOpen}
				class:translate-y-0={!isSidePanelMenuOpen}
			/>
			<span
				class="mb-1 block h-1 w-6 bg-white opacity-0 transition duration-500 ease-in-out"
				class:opacity-100={isSidePanelMenuOpen}
			/>
			<span
				class="mb-0 block h-1 w-6 transform bg-white transition duration-500 ease-in-out"
				class:-rotate-45={isSidePanelMenuOpen}
				class:translate-y-1.5={isSidePanelMenuOpen}
				class:rotate-0={!isSidePanelMenuOpen}
				class:-translate-y-0={!isSidePanelMenuOpen}
			/>
		</button>
		<div class="hidden md:flex md:items-center">
			{#each navigationOptions as option (option.title)}
				<a href={option.link} class="ml-4 text-white">{$LL[option.title]()}</a>
			{/each}
		</div>
	</div>
	<div class="flex flex-1 items-center justify-center" />
	<div class="mr-4 flex flex-1 items-center justify-end">
		<LocaleSwitcher />
		<NavbarLanguage />
		<NavbarProfile />
	</div>
</nav>
{#if isSidePanelMenuOpen}
	<div
		class="menu-transition fixed left-0 top-16 h-full w-32 transform bg-gray-800 p-4 text-white transition duration-500 ease-in-out"
		class:translate-x-0={isSidePanelMenuOpen}
		class:translate-x-full={!isSidePanelMenuOpen}
	>
		<ul class="space-y-2">
			{#each navigationOptions as option (option.title)}
				<li>
					<a class="hover:text-gray-400" href={option.link}
						>{$LL[option.title]()}</a
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
