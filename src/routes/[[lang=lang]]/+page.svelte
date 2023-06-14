<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import { goto } from '$app/navigation';
	import { locale } from '../../i18n/i18n-svelte';

	import { slide } from 'svelte/transition';
</script>

<main
	transition:slide
	class="flex min-h-screen flex-col-reverse items-center justify-center bg-primary text-text_primary md:flex-row md:pb-4 md:pt-10"
>
	<div class="w-3/5 text-center md:w-1/2">
		<h1 class="text-2xl italic md:text-3xl">{$LL.PAGE_TITLE()}</h1>
		<h1 class="text-4xl font-bold leading-tight md:text-5xl">
			{$LL.BRAND_CLAIM()}
		</h1>
		<button
			on:click={() => {
				goto($locale + '/audit');
			}}
			class="mt-8 inline-block rounded bg-brand_teal px-6 py-3 font-bold text-white"
			>{$LL.BUTTON_AUDIT_NOW()}</button
		>
	</div>
</main>
<section
	class="mt-0 flex scroll-mt-24 bg-primary_off text-text_primary
	"
	id="about"
>
	<div
		class="container mx-auto flex w-4/5 items-center justify-center px-8 py-12"
	>
		<div class="w-100 pb-12 md:pb-6">
			<h2 class="mb-4 text-center text-3xl font-semibold">
				{$LL.ABOUT_TITLE()}
			</h2>
			<p class="text-lg md:text-xl">
				{$LL.ABOUT_CONTENT()}
			</p>
			<h2 class="py-4 text-xl font-semibold md:text-2xl">
				{$LL.ABOUT_CLAIM()}
			</h2>
			<p class="text-lg md:text-xl">{$LL.ABOUT_CONTENT_P2()}</p>
		</div>
	</div>
</section>
<section
	class="flex scroll-mt-24 flex-col bg-primary text-text_primary md:pb-40"
	id="community"
>
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row"
	>
		<div class="p-1 md:p-8">
			<h2 class="mb-4 text-center text-3xl font-bold">
				{$LL.COMMUNITY_TITLE()}
			</h2>
			<p class="text-center text-xl">
				{$LL.COMMUNITY_CONTENT()}
			</p>
		</div>
	</div>
	<div id="contribute" class="scroll-mt-24">
		<div
			class="container mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row"
		>
			<div class="p-1 md:p-8">
				<h2 class="mb-4 text-center text-3xl font-bold">
					{$LL.CONTRIBUTE_TITLE()}
				</h2>
				<p class="text-center text-xl">
					{$LL.CONTRIBUTE_CONTRIBUTE()}
				</p>
			</div>
		</div>
		<div
			class="container mx-auto flex flex-col items-center justify-center text-text_primary md:flex-row md:flex-wrap"
		>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="h-40 rounded-lg bg-primary_off p-6 shadow-lg">
					<span class="pb-4 text-xl font-bold"
						>{$LL.CONTRIBUTE_CONTRIBUTE()}</span
					>
					<p class="text-xl">
						{$LL.CONTRIBUTE_CONTRIBUTE_DESCRIPTION()}
					</p>
				</div>
			</div>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="h-40 rounded-lg bg-primary_off p-6 shadow-lg">
					<p class="text-center text-xl">
						<span class="font-bold">{$LL.CONTRIBUTE_IMPROVE_LIFE()}</span>
						{$LL.CONTRIBUTE_IMPROVE_LIFE_DESCRIPTION()}
					</p>
				</div>
			</div>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="h-40 rounded-lg bg-primary_off p-6 shadow-lg">
					<p class="text-center text-xl">
						<span class="font-bold">{$LL.CONTRIBUTE_LEARN_FROM_OTHERS()}</span>
						{$LL.CONTRIBUTE_LEARN_FROM_OTHERS_DESCRIPTION()}
					</p>
				</div>
			</div>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="h-40 rounded-lg bg-primary_off p-6 shadow-lg">
					<p class="text-center text-xl">
						<span class="font-bold">{$LL.CONTRIBUTE_LEARN_FROM_OTHERS()}</span>
						{$LL.CONTRIBUTE_LEARN_FROM_OTHERS_DESCRIPTION()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer />
