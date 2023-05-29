<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { slide } from 'svelte/transition';

	let currentLocation = 'overview';
	const auditQuestionare = {
		categories: [
			{
				code: 'social',
				name: 'QUESTIONARE_SOCIAL',
				color: '#FF0000',
				questions: [
					{
						question: 'AUDIT_SOCIAL_01',
						type: 'pick',
						answers: ['not a lot', 'a lot'],
						isAnswered: false,
					},
				],
			},
			{
				code: 'lifestyle',
				color: '#0000FF',
				name: 'QUESTIONARE_LIFESTYLE',
				questions: [
					{ question: 'Sleep quality?', type: 'range', isAnswered: false },
				],
			},
			{
				code: 'mental',
				color: '#00FF00',
				name: 'QUESTIONARE_MENTAL',
				questions: [
					{ question: 'Sleep quality?', type: 'range', isAnswered: false },
				],
			},
		],
	};
</script>

<main transition:slide class="min-h-screen bg-primary">
	<div class="mt-16 text-text_primary">
		{#if currentLocation == 'overview'}
			<div class="flex flex-wrap items-center justify-center md:pt-28">
				{#each auditQuestionare.categories as category}
					<button
						class="mb-2 flex h-40 w-40 flex-col place-content-center items-center rounded-md border-2 bg-primary_off md:mb-0 md:mr-2"
						style="border-color:{category.color}"
						on:click={() => {
							currentLocation = category.code;
						}}
					>
						<div>{$LL[category.name]()}</div>
						<div>
							{category.questions.filter(
								(category) => category.isAnswered == true
							).length}/{category.questions.length.toString()}
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<div>
				{JSON.stringify(
					auditQuestionare.categories.find(
						(category) => category.code == currentLocation
					).questions
				)}
			</div>
		{/if}
	</div>
</main>
