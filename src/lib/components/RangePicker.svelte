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
				class="m-1 h-6 w-6 cursor-pointer rounded-lg bg-gray-300 md:h-8 md:w-8 {i +
					1 ===
				selectedValue
					? 'bg-gray-800'
					: ''}"
				on:click={() => handleDotClick(i + 1)}
			/>
		{/each}
	</div>
	<div
		class="col-start-4 row-start-2 mt-2 text-lg md:col-start-4 md:row-start-1 md:ml-4"
	>
		Disagree
	</div>
</div>
