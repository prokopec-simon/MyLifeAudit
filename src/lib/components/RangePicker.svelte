<script lang="ts">
	export let selectedValue;

	const handleDotClick = (value) => {
		selectedValue = value;

		const event = new CustomEvent('answerSelected', {
			detail: {
				value,
			},
		});

		window.dispatchEvent(event);
	};

	const hoverStyles = {
		0: 'hover:bg-green-600',
		1: 'hover:bg-green-400',
		2: 'hover:bg-green-200',
		3: 'hover:bg-gray-100',
		4: 'hover:bg-red-200',
		5: 'hover:bg-red-400',
		6: 'hover:bg-red-600',
	};

	const colors = {
		0: 'bg-green-600',
		1: 'bg-green-400',
		2: 'bg-green-200',
		3: 'bg-gray-100',
		4: 'bg-red-200',
		5: 'bg-red-400',
		6: 'bg-red-600',
	};
</script>

<div class="grid grid-cols-4 justify-center">
	<div
		class="row-start-2 mt-2 text-lg md:col-start-1 md:row-start-1 md:mr-4 md:text-right"
	>
		Agree
	</div>
	<div class="col-span-4 md:col-span-2">
		{#each Array(7) as _, i}
			<button
				class="m-1 h-6 w-6 cursor-pointer rounded-lg border border-solid border-brand_brick md:h-8 md:w-8"
				on:click={() => handleDotClick(i + 1)}
			>
				<div class="relative h-full w-11/12">
					<div
						class="absolute inset-0 m-1 rounded-full opacity-0 hover:opacity-100 {hoverStyles[
							i
						]} {selectedValue === i + 1 ? 'opacity-100' : ''} {colors[i]}"
					/>
				</div>
			</button>
		{/each}
	</div>

	<div
		class="col-start-4 row-start-2 mt-2 text-lg md:col-start-4 md:row-start-1 md:ml-4"
	>
		Disagree
	</div>
</div>
