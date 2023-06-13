<script lang="ts">
	import IcRoundDiscord from '~icons/ic/round-discord';
	import IcRoundMarkEmailRead from '~icons/ic/round-mark-email-read';
	import { LL } from '$i18n/i18n-svelte';
	import MaterialSymbolsCheckCircleOutline from '~icons/material-symbols/check-circle-outline';
	import { colors } from '../../colorThemes';
</script>

<div
	class="mx-auto flex w-full flex-col px-8 pt-4 text-text_primary md:w-4/6 md:flex-row md:pt-16"
>
	<div class="w-full md:w-1/2">
		<h2 class="text-4xl font-semibold">{$LL.CONTACT_FORM_TITLE()}</h2>
		<p class="text-xl">{$LL.CONTACT_FORM_CONTENT()}</p>
		<ul class="mt-4 py-1 text-lg">
			<li class="flex items-center">
				<div class="mr-2">
					<MaterialSymbolsCheckCircleOutline color={colors.light.brand_teal} />
				</div>
				<div>{$LL.CONTACT_FORM_POINTS_0()}</div>
			</li>
			<li class="flex items-center">
				<div class="mr-2">
					<MaterialSymbolsCheckCircleOutline color={colors.light.brand_teal} />
				</div>
				<div>{$LL.CONTACT_FORM_POINTS_1()}</div>
			</li>
			<li class="flex items-center">
				<div class="mr-2">
					<MaterialSymbolsCheckCircleOutline color={colors.light.brand_teal} />
				</div>
				<div>{$LL.CONTACT_FORM_POINTS_2()}</div>
			</li>
			<li class="flex items-center">
				<div class="mr-2">
					<MaterialSymbolsCheckCircleOutline color={colors.light.brand_teal} />
				</div>
				<div>{$LL.CONTACT_FORM_POINTS_3()}</div>
			</li>
			<li class="flex items-center">
				<div class="mr-2">
					<MaterialSymbolsCheckCircleOutline color={colors.light.brand_teal} />
				</div>
				<div>{$LL.CONTACT_FORM_POINTS_4()}</div>
			</li>
		</ul>
		<h3 class="my-2 text-lg italic">{$LL.CONTACT_FORM_FIND_US()}</h3>
		<div class="flex flex-row justify-start">
			<button> <IcRoundDiscord class="mr-2 h-12 w-12" /> </button>
			<button> <IcRoundMarkEmailRead class="h-12 w-12" /> </button>
		</div>
	</div>
	<div class="w-full md:w-1/2">
		<form class="rounded bg-primary_off px-8 py-6 shadow-md">
			<label for="name" class="mb-2 block font-medium">
				<span>{$LL.CONTACT_FORM_NAME()}</span>
			</label>
			<input
				name="name"
				aria-label="name"
				required
				class="mb-4 w-full rounded border border-primary bg-primary px-3 py-2 focus:border-brand_teal focus:outline-none"
			/>
			<label for="email" class="mb-2 block font-medium">
				<span>{$LL.CONTACT_FORM_EMAIL()}</span>
			</label>
			<input
				type="email"
				name="email"
				aria-label="email"
				required
				class="mb-4 w-full rounded border border-primary bg-primary px-3 py-2 focus:border-brand_teal focus:outline-none"
			/>
			<label for="message" class="mb-2 block font-medium">
				<span>{$LL.CONTACT_FORM_MESSAGE()}</span>
			</label>
			<textarea
				name="message"
				aria-label="name"
				required
				rows="6"
				class="mb-4 w-full resize-none rounded border border-primary bg-primary px-3 py-2 focus:border-brand_teal focus:outline-none"
			/>
			<input
				type="submit"
				value={$LL.CONTACT_FORM_SUBMIT()}
				class="w-full rounded bg-brand_teal px-4 py-2 font-medium text-text_primary focus:outline-none"
			/>
		</form>
	</div>
</div>
