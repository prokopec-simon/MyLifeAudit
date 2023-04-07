<script>
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	let session = $page.data.session;

	let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const navigationOptions = [
		{ title: 'About', link: '/about' },
		{ title: 'Contact', link: '/contact' },
		{ title: 'Resources', link: '/resources' },
		{ title: 'Join us', link: '/join-us' },
	];
</script>

<nav class="flex h-20 bg-gray-800">
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
		{#if session}
			<span class="userName">
				<strong>{session.user?.name}</strong>
			</span>
			<button on:click={() => signOut()} class="button">Sign out</button>
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
