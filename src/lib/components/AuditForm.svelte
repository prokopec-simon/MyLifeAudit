<script lang="ts">
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import auditFormStore from '../../stores/auditStore';
	import { LL } from '$i18n/i18n-svelte';
	import RangePicker from './RangePicker.svelte';
	import type { AuditCategory } from '../../models/AuditForm';

	let currentCategory: AuditCategory;

	const scrollToNextQuestion = () => {
		const rangePickers = document.querySelectorAll('.range-picker');
		const nextRangePicker = rangePickers[rangePickers.length - 1];

		if (nextRangePicker) {
			const rect = nextRangePicker.getBoundingClientRect();
			const { top } = rect;
			window.scrollBy({ top: top, behavior: 'smooth' });
		}
	};

	const unsubscribe = auditFormStore.subscribe((value) => {
		const currentLocation = value.currentLocation;
		currentCategory = value.categories.find(
			(category) => category.code === currentLocation
		);
	});

	onMount(() => {
		const handleAnswerSelected = () => {
			scrollToNextQuestion();
		};

		window.addEventListener('answerSelected', handleAnswerSelected);

		return () => {
			window.removeEventListener('answerSelected', handleAnswerSelected);
			unsubscribe();
		};
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center text-text_primary"
>
	{#each currentCategory.questions as question}
		<div
			class="mb-4 flex h-48 w-4/5 flex-col items-center justify-center rounded-lg bg-primary_off p-4 shadow md:w-3/5"
		>
			<div class="mb-4 md:text-xl">{$LL[question.question]()}</div>
			<RangePicker selectedValue="4" wtfSvelteKit="range-picker" />
		</div>
	{/each}
	<div class="min-h-screen">Audit long Footer here ^^</div>
</div>
