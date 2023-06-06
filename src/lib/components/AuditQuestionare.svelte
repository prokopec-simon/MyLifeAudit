<script lang="ts">
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import auditQuestionare from '../../stores/auditStore';
	import { LL } from '$i18n/i18n-svelte';
	import RangePicker from './RangePicker.svelte';

	let currentQuestion;
	let previousQuestion;
	let nextQuestion;
	let currentCategory;

	const unsubscribe = auditQuestionare.subscribe((value) => {
		const currentLocation = value.currentLocation;
		currentCategory = value.categories.find(
			(category) => category.code === currentLocation
		);
		currentQuestion = currentCategory.questions[value.currentQuestionIndex];
		previousQuestion =
			currentCategory.questions[value.currentQuestionIndex - 1];
		nextQuestion = currentCategory.questions[value.currentQuestionIndex + 1];
	});

	onMount(() => {
		return unsubscribe;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center text-text_primary"
>
	{#if $auditQuestionare.currentQuestionIndex > 0}
		<div class="mb-4 w-2/5 rounded-lg bg-primary_off p-4 shadow">
			<div>{$LL[previousQuestion.question]()}</div>
			<RangePicker selectedValue="4" />
		</div>
	{/if}
	<div class="mb-4 w-3/5 rounded-lg bg-primary_off p-4 shadow">
		<div>{$LL[currentQuestion.question]()}</div>
		<RangePicker selectedValue="4" />
	</div>
	{#if $auditQuestionare.currentQuestionIndex + 1 < currentCategory.questions.length}
		<div class="w-2/5 rounded-lg bg-primary_off p-4 shadow">
			<div>{$LL[nextQuestion.question]()}</div>
			<RangePicker selectedValue="4" />
		</div>
	{/if}
</div>
