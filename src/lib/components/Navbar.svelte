<script lang="ts">
	import NavbarLanguage from './NavbarLanguage.svelte';
	import NavbarProfile from './NavbarProfile.svelte';
	import LL from '../../i18n/i18n-svelte';
	import NavbarTheme from './NavbarTheme.svelte';
	import { locale } from '../../i18n/i18n-svelte';

	let isSidePanelMenuOpen = false;
	function toggleSidePanelMenu() {
		isSidePanelMenuOpen = !isSidePanelMenuOpen;
	}

	let about = $LL.NAV_ABOUT();
	let navigationOptions = [
		{
			title: 'NAV_AUDIT',
			link: '/audit',
			textColor: 'text-brand_brick ',
		},
		{ title: 'NAV_ABOUT', link: '#about' },
		{ title: 'NAV_COMMUNITY', link: '#community' },
		//{ title: 'NAV_CONTRIBUTE', link: '#contribute' },
		{ title: 'NAV_CONTACT', link: '/contact' },
		//{ title: 'NAV_RESOURCES', link: '/resources' },
	];
</script>

<div class="flex flex-col">
	<nav class="fixed top-0 z-50 flex h-16 w-full bg-primary text-text_primary">
		<div class="ml-4 flex items-center">
			<button
				aria-label="toggleSidePanel"
				class="mr-4 text-2xl font-bold focus:outline-none md:hidden"
				on:click={toggleSidePanelMenu}
			>
				<span
					class="mb-1 block h-1 w-6 transform bg-text_primary transition duration-500 ease-in-out"
					class:rotate-45={isSidePanelMenuOpen}
					class:rotate-0={!isSidePanelMenuOpen}
					class:translate-y-2={isSidePanelMenuOpen}
				/>
				<span
					class="mb-1 block h-1 w-6 bg-text_primary opacity-0 transition duration-500 ease-in-out"
					class:opacity-100={!isSidePanelMenuOpen}
				/>
				<span
					class="mb-0 block h-1 w-6 transform bg-text_primary transition duration-500 ease-in-out"
					class:-rotate-45={isSidePanelMenuOpen}
					class:rotate-0={!isSidePanelMenuOpen}
					class:-translate-y-2={isSidePanelMenuOpen}
				/>
			</button>
			<div class="hidden md:flex md:items-center">
				{#each navigationOptions as option (option.title)}
					<a
						class="mx-2 text-xl transition duration-150 hover:text-brand_teal {option.textColor}"
						href={`/${$locale}${option.link}`}
					>
						{$LL[option.title]()}
					</a>
				{/each}
			</div>
		</div>
		<div class="flex flex-1 items-center justify-center" />
		<div class="mr-4 flex flex-1 items-center justify-end">
			<NavbarLanguage />
			<NavbarTheme />
			<NavbarProfile />
		</div>
	</nav>
</div>

{#if isSidePanelMenuOpen}
	<div
		class="menu-transition fixed left-0 top-16 h-full w-full transform bg-primary p-4 text-text_primary transition duration-500 ease-in-out"
		class:translate-x-0={isSidePanelMenuOpen}
		class:translate-x-full={!isSidePanelMenuOpen}
	>
		<ul class="space-y-2">
			{#each navigationOptions as option (option.title)}
				<li>
					<a href={`/${$locale}${option.link}`}
						><button
							on:click={() => {
								toggleSidePanelMenu();
							}}
							class="text-xl hover:text-brand_teal"
							>{$LL[option.title]()}</button
						></a
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
