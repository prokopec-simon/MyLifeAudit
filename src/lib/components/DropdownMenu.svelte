<script lang="ts">
	import CircleFlagsCz from '~icons/circle-flags/cz';
	import CircleFlagsUs from '~icons/circle-flags/us';
	import MdiCheckboxBlankCircle from '~icons/mdi/checkbox-blank-circle';
	import { clickOutside } from '../../helpers/clickOutside';

	export let isOpen = false;
	export let toggleButtonRef: string;
	export let options: {
		id: number;
		value?: string;
		color?: string;
		icon?: string;
		onClick: () => void;
	}[] = [];

	const icons = {
		cz: CircleFlagsCz,
		us: CircleFlagsUs,
		circle: MdiCheckboxBlankCircle,
	};

	let selectedOption = null;

	function handleClickOutside(event) {
		isOpen = false;
	}

	function getIconComponent(iconName: string) {
		return icons[iconName] || null;
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === 'Space') {
			selectedOption?.onClick();
			isOpen = false;
		}
	}
</script>

<div
	class="relative inline-block"
	use:clickOutside={(this, toggleButtonRef)}
	on:click_outside={handleClickOutside}
>
	<ul
		class="absolute left-auto right-0 top-full mt-6 w-32 list-none border border-gray-300 bg-white p-0 text-black"
		class:hidden={!isOpen}
	>
		{#each options as option (option.id)}
			<li
				class="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100"
				on:click={() => {
					option.onClick();
					selectedOption = option;
					isOpen = false;
				}}
				on:keydown={handleKeyDown}
			>
				{#if option.icon}
					{#if getIconComponent(option.icon)}
						<svelte:component
							this={getIconComponent(option.icon)}
							class="mr-3"
							color={option.color}
						/>
					{/if}
				{/if}
				{#if option.value}
					{option.value}
				{/if}
			</li>
		{/each}
	</ul>
</div>
