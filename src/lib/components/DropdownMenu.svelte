<!-- Dropdown.svelte -->
<script lang="ts">
	import Cz_rounded from '../components/Icons/Cz_rounded.svelte';

	export let options: {
		id: number;
		value: string;
		icon?: string;
		onClick: () => void;
	}[] = [];
	export let isOpen = false;
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
					<div class="w-4"><Cz_rounded /></div>
				{/if}
				{option.value}
			</li>
		{/each}
	</ul>
</div>
