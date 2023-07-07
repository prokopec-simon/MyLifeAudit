<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { slide } from 'svelte/transition';
	import auditStore from '../../../stores/auditStore';
	import AuditForm from '../../../lib/components/AuditForm.svelte';
	import Modal from '../../../lib/components/ConfirmModal.svelte';

	let showModal = false;
</script>

<main transition:slide class="min-h-screen bg-primary">
	{#if $auditStore.currentLocation != 'overview'}
		<button
			class="absolute top-1/2 h-20 w-20 -translate-y-1/2 transform rounded-full bg-brand_teal px-4 py-1 text-sm text-white"
			on:click={() => {
				auditStore.update((value) => {
					return {
						...value,
						currentLocation: 'overview',
					};
				});
			}}
		>
			Back
		</button>
	{/if}
	<div class="mt-16 text-text_primary">
		{#if $auditStore.currentLocation == 'overview'}
			<div class="flex flex-col">
				<div class="flex flex-wrap items-center justify-center pt-12 md:pt-28">
					{#each $auditStore.categories as category}
						<button
							class="m-2 mb-2 flex h-32 w-32 flex-col place-content-center items-center rounded-md border-2 bg-primary_off md:mb-0 md:mr-2 md:h-40 md:w-40"
							style="border-color:{category.color}"
							on:click={() => {
								auditStore.update((value) => {
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
					class="mx-auto mt-8 inline-block w-32 rounded bg-brand_brick px-6 py-3 text-lg text-white"
					on:click={() => {
						showModal = true;
					}}>End Audit</button
				>
			</div>
		{:else}
			<div>
				<AuditForm />
			</div>
		{/if}
	</div>
</main>
<Modal bind:showModal>
	<h2 slot="header">
		{$LL.AUDIT_CLOSE_UNANSWERED_MODAL_TITLE()}
	</h2>
	<div slot="body">{$LL.AUDIT_CLOSE_UNANSWERED_MODAL_WARNING()}</div>
	<div slot="footer">
		<button>End anyway</button><button>Finish Auditing</button>
	</div>
</Modal>
