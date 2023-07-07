<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import IcRoundDiscord from '~icons/ic/round-discord';
	import IcRoundMarkEmailRead from '~icons/ic/round-mark-email-read';
</script>

<footer
	class="-mt-0.5 flex flex-col items-center justify-center bg-primary_off py-8 text-text_primary md:py-12"
>
	<div
		class="mx-auto flex w-4/5 flex-wrap md:my-4 md:flex-row md:flex-nowrap md:pt-10"
		id="footerWrapper"
	>
		<div class="flex w-full flex-col pb-8 pt-2 md:w-1/4 md:py-0">
			<h1 class="text-4xl text-brand_teal">My Life Audit</h1>
			<div class="mt-2 flex flex-row">
				<IcRoundDiscord class="mr-2 h-6 w-6" />
				<IcRoundMarkEmailRead class="h-6 w-6" />
			</div>
		</div>
		<div class="flex w-1/2 flex-col md:w-1/4">
			<h2 class="mb-1 text-xl md:mb-1.5">{$LL.FOOTER_EXPLORE()}</h2>
			<a
				href="/"
				class="mb-2 transition duration-150 hover:text-brand_teal"
				aria-label="Resources redirect"
			>
				{$LL.FOOTER_EXPLORE_RESOURCES()}
			</a>
		</div>
		<div class="flex w-1/2 flex-col md:w-1/4">
			<h2 class="mb-1 text-xl md:mb-1.5">{$LL.FOOTER_LEGAL()}</h2>
			<a
				href="/"
				class="mb-1 transition duration-150 hover:text-brand_teal md:mb-2"
				aria-label="ToS redirect"
			>
				{$LL.FOOTER_TOS()}
			</a>
			<a
				href="/"
				class="mb-1 transition duration-150 hover:text-brand_teal md:mb-2"
				aria-label="Privacy redirect"
			>
				{$LL.FOOTER_PRIVACY()}
			</a>
		</div>
		<div class="mt-12 flex w-1/2 flex-col md:mt-0 md:w-1/4">
			<h2 class="mb-1 text-xl md:mb-1.5">{$LL.FOOTER_COMPANY()}</h2>
			<a
				href="/"
				aria-label="Contact form redirect"
				class="mb-1 transition duration-150 hover:text-brand_teal md:mb-2"
			>
				{$LL.FOOTER_COMPANY_CONTACT()}
			</a>
		</div>
	</div>
	<hr />
	<p class="mt-12">&copy; 2023 My Life Audit</p>
</footer>
