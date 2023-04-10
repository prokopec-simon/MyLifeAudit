<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { writable } from 'svelte/store';
	import Dropdown from '../components/DropdownMenu.svelte';

	let session = $page.data.session;

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

	function toggleProfileDropdown() {
		dropdownStore.update((store) => {
			return { ...store, isOpen: !store.isOpen };
		});
	}
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
{#if session}
	<span class="flex items-center text-white">
		<p class="max-w-xs truncate">{session.user?.name}</p>
		<button
			class="ml-2 cursor-pointer border-none bg-none"
			on:click={toggleProfileDropdown}
		>
			<i class="fas fa-chevron-down" />
		</button>
	</span>
	<Dropdown
		bind:options={$dropdownStore.options}
		bind:isOpen={$dropdownStore.isOpen}
	/>
{:else}
	<button on:click={() => signIn()} class="button">Sign In</button>
{/if}
