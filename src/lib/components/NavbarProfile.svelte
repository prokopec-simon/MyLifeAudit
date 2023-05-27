<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { writable } from 'svelte/store';
	import Dropdown from '../components/DropdownMenu.svelte';
	import MdiChevronDown from '~icons/mdi/chevron-down';
	import { LL } from '$i18n/i18n-svelte';

	let session = $page.data.session;

	const dropdownStore = writable({
		options: [
			{
				id: 2,
				value: $LL['DROPDOWN_PROFILE_HISTORY'](),
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

{#if session}
	<span class="flex items-center text-text_primary">
		<p class="max-w-xs truncate">{session.user?.name}</p>
		<button
			aria-label="toggleProfileDropdown"
			class="ml-2 cursor-pointer border-none bg-none"
			on:click={toggleProfileDropdown}
			id="profileToggleButton"
		>
			<MdiChevronDown />
		</button>
	</span>
	<Dropdown
		bind:options={$dropdownStore.options}
		bind:isOpen={$dropdownStore.isOpen}
		toggleButtonRef={'#profileToggleButton'}
	/>
{:else}
	<button
		on:click={() => signIn()}
		class="button w-24 rounded-md bg-brand_brick px-4 py-2 text-white"
		>{$LL.SIGN_IN_TITLE()}</button
	>
{/if}
