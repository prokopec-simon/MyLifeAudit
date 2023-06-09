<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { slide } from 'svelte/transition';
	import auditQuestionare from '../../../stores/auditStore';
	import AuditQuestionare from '../../../lib/components/AuditQuestionare.svelte';
	import Modal from '../../../lib/components/ConfirmModal.svelte';

	let showModal = false;
</script>

<main transition:slide class="min-h-screen bg-primary">
	<div class="mt-16 text-text_primary">
		{#if $auditQuestionare.currentLocation == 'overview'}
			<div class="flex flex-col">
				<div class="flex flex-wrap items-center justify-center md:pt-28">
					{#each $auditQuestionare.categories as category}
						<button
							class="mb-2 flex h-40 w-40 flex-col place-content-center items-center rounded-md border-2 bg-primary_off md:mb-0 md:mr-2"
							style="border-color:{category.color}"
							on:click={() => {
								auditQuestionare.update((value) => {
									return {
										...value,
										currentLocation: category.code,
									};
								});
							}}
						>
							<div>{$LL[category.name]()}</div>
							<div>
								{category.questions.filter(
									(question) => question.isAnswered == true
								).length}/{category.questions.length.toString()}
							</div>
						</button>
					{/each}
				</div>
				<button
					class="mx-auto mt-8 inline-block w-32 rounded bg-brand_brick px-6 py-3 font-bold text-white"
					on:click={() => {
						showModal = true;
					}}>End Audit</button
				>
			</div>
		{:else}
			<div>
				<AuditQuestionare />
			</div>
			<button
				class="mt-8 inline-block rounded bg-brand_teal px-4 py-1 text-sm text-white"
				on:click={() => {
					auditQuestionare.update((value) => {
						return {
							...value,
							currentLocation: 'overview',
						};
					});
				}}>Back to topics</button
			>
		{/if}
	</div>
</main>
<Modal bind:showModal>
	<h2 slot="header">
		{$LL.AUDIT_CLOSE_UNANSWERED_MODAL_TITLE()}
	</h2>

	<div>{$LL.AUDIT_CLOSE_UNANSWERED_MODAL_WARNING()}</div>
</Modal>
