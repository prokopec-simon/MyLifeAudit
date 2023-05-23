<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import IcRoundDiscord from '~icons/ic/round-discord';
	import IcRoundMarkEmailRead from '~icons/ic/round-mark-email-read';
</script>

<section class="flex h-screen bg-white">
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="flex flex-col md:flex-row">
			<div class="flex w-full flex-col md:w-1/2">
				<a href="/" class="mb-2">
					{$LL.FOOTER_TOS()}
				</a>
				<a href="/" class="mb-2">
					{$LL.FOOTER_PRIVACY()}
				</a>
			</div>
			<div class="flex w-full flex-col md:w-1/2">
				<h2 class="mb-2 text-lg font-semibold">{$LL.FOOTER_CONTACT()}</h2>
				<p class="mb-2 text-gray-700">Email: support@mylifeaudit.org</p>
				<div class="flex flex-row">
					<IcRoundDiscord class="mr-2 h-6 w-6 " />
					<IcRoundMarkEmailRead class="h-6 w-6" />
				</div>
			</div>
		</div>
	</div>
</section>
