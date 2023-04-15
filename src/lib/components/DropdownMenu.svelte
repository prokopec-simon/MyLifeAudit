<!-- Dropdown.svelte -->
<script lang="ts">
	// Import icons dynamically
	import CircleFlagsCz from '~icons/circle-flags/cz';
	import CircleFlagsUs from '~icons/circle-flags/us';

	const icons = {
		cz: CircleFlagsCz,
		us: CircleFlagsUs,
		// Add more icons here
	};

	export let options: {
		id: number;
		value: string;
		icon?: string;
		onClick: () => void;
	}[] = [];
	export let isOpen = false;

	// Function to get the icon component based on icon name
	function getIconComponent(iconName: string) {
		return icons[iconName] || null;
	}
</script>

<div class="relative inline-block">
	<ul
		class="absolute top-full m-0 mt-6 w-32 list-none border border-gray-300 bg-white p-0"
		class:hidden={!isOpen}
		style="right: 0; left: auto;"
	>
		{#each options as option (option.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				class="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100"
				on:click={() => option.onClick()}
			>
				{#if option.icon}
					{#if getIconComponent(option.icon)}
						<svelte:component
							this={getIconComponent(option.icon)}
							class="mr-3"
						/>
					{/if}
				{/if}
				{option.value}
			</li>
		{/each}
	</ul>
</div>
