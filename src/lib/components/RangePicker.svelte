<script lang="ts">
	import auditQuestionare from '../../stores/auditStore';

	export let selectedValue;

	function handleDotClick(value) {
		selectedValue = value;
		auditQuestionare.update((value) => {
			return {
				...value,
				currentQuestionIndex: ++value.currentQuestionIndex,
			};
		});
	}
</script>

<div class="flex justify-center">
	{#each Array(9) as _, i}
		<button
			class="m-1 h-4 w-4 cursor-pointer rounded-full bg-gray-300 {i + 1 ===
			selectedValue
				? 'bg-gray-800'
				: ''}"
			on:click={() => handleDotClick(i + 1)}
		/>
	{/each}
</div>
