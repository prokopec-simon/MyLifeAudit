<script>
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	let session = $page.data.session;

	let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="flex h-20 bg-gray-800">
	<div class="ml-4 flex flex-1 items-center">
		<button
			class="mr-4 text-2xl font-bold focus:outline-none"
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
	</div>
	<div class="flex flex-1 items-center justify-center" />
	<div class="mr-4 flex flex-1 items-center justify-end">
		{#if session}
			{#if session.user?.image}
				<span
					style="background-image: url('{session.user.image}')"
					class="avatar"
				/>
			{/if}
			<span class="signedInText">
				<strong>{session.user?.name}</strong>
			</span>
			<button on:click={() => signOut()} class="button">Sign out</button>
		{:else}
			<button on:click={() => signIn()}>Sign In</button>
		{/if}
	</div>
</nav>
{#if isMenuOpen}
	<div
		class="menu-transition fixed left-0 top-20 h-full w-64 transform bg-gray-800 p-4 text-white transition duration-500 ease-in-out"
		class:translate-x-0={isMenuOpen}
		class:translate-x-full={!isMenuOpen}
	>
		<ul class="space-y-2">
			<li><a class="hover:text-gray-400" href="#">About</a></li>
			<li><a class="hover:text-gray-400" href="#">Resources</a></li>
			<li><a class="hover:text-gray-400" href="#">Contact</a></li>
			<li><a class="hover:text-gray-400" href="#">Join us</a></li>
		</ul>
	</div>
{/if}
