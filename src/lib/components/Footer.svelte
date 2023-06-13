<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import IcRoundDiscord from '~icons/ic/round-discord';
	import IcRoundMarkEmailRead from '~icons/ic/round-mark-email-read';
</script>

<footer
	class="flex flex-col items-center justify-center bg-primary_off text-text_primary md:py-12"
>
	<div
		class="mx-auto flex w-4/5 flex-col justify-center md:my-4 md:flex-row md:pt-10"
		id="footerWrapper"
	>
		<div class="flex w-full flex-col md:w-1/5">
			<h1 class="text-2xl font-bold text-brand_teal">My Life Audit</h1>

			<div class="flex flex-row">
				<IcRoundDiscord class="mr-2 h-6 w-6" />
				<IcRoundMarkEmailRead class="h-6 w-6" />
			</div>
		</div>
		<div class="flex w-full flex-col md:w-1/5">
			<h2 class="mb-2 text-lg font-semibold">{$LL.FOOTER_EXPLORE()}</h2>
			<a href="/" class="mb-2">{$LL.FOOTER_EXPLORE_RESOURCES()}</a>
		</div>
		<div class="flex w-full flex-col md:w-1/5">
			<h2 class="mb-2 text-lg font-semibold">{$LL.FOOTER_LEGAL()}</h2>
			<a href="/" class="mb-2">
				{$LL.FOOTER_TOS()}
			</a>
			<a href="/" class="mb-2">
				{$LL.FOOTER_PRIVACY()}
			</a>
		</div>
		<div class="flex w-full flex-col md:w-1/5">
			<h2 class="mb-2 text-lg font-semibold">{$LL.FOOTER_COMPANY()}</h2>
			<a href="/" class="mb-2">{$LL.FOOTER_COMPANY_CONTACT()}</a>
		</div>
		<hr />
	</div>
	<p class="mt-12">&copy; Copyright 2023, My Life Audit</p>
</footer>
