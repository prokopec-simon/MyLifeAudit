<script lang="ts">
	import IcRoundDiscord from '~icons/ic/round-discord';
	import IcRoundMarkEmailRead from '~icons/ic/round-mark-email-read';
	import { LL } from '$i18n/i18n-svelte';
</script>

<div class="mt-10 flex flex-col items-center">
	<div class="text-center">
		<h3 class="mb-2 text-2xl font-bold">{$LL.CONTACT_FORM_TITLE}</h3>
		<div class="flex flex-row">
			<IcRoundDiscord class="mr-2 h-8 w-8" />
			<IcRoundMarkEmailRead class="h-8 w-8" />
		</div>
	</div>
	<div class="mt-6 w-full">
		<form class="rounded bg-white px-8 py-6 shadow-md">
			<label for="name" class="mb-2 block font-medium text-gray-700">
				<span>{$LL.CONTACT_FORM_NAME}</span>
			</label>
			<input
				name="name"
				aria-label="name"
				required
				class="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
			/>
			<label for="email" class="mb-2 block font-medium text-gray-700">
				<span>{$LL.CONTACT_FORM_EMAIL}</span>
			</label>
			<input
				type="email"
				name="email"
				aria-label="email"
				required
				class="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
			/>
			<label for="message" class="mb-2 block font-medium text-gray-700">
				<span>{$LL.CONTACT_FORM_MESSAGE}</span>
			</label>
			<textarea
				name="message"
				aria-label="name"
				required
				rows="3"
				class="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
			/>
			<input
				type="submit"
				class="w-full rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none"
			/>
		</form>
	</div>
</div>
