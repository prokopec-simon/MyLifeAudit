<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import { goto } from '$app/navigation';
	import { locale } from '../../i18n/i18n-svelte';
	const svgPath = '/about_top_bg.svg';

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
<div class="w-full bg-primary">
	<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		width="100%"
		height="130px"
	>
		<path
			class="primarybg"
			d="M1920,30.793V130H-0.667V74.698c35.48-7.638,82.236-15.425,150.96-22.35
	c15.073-1.523,31.699-3.354,49.697-5.334c81.801-9.018,191.909-21.15,313.054-21.15c63.99,0,124.453,6.82,193.027,14.563
	c89.829,10.136,193.575,21.847,337.392,21.847c132.541,0,235.469-14.532,333.731-28.412
	c89.754-12.672,175.621-24.796,276.621-24.796C1782.237,9.066,1849.438,17.506,1920,30.793z"
		/>
	</svg>
</div>
<section
	class="mt-0 flex scroll-mt-24 bg-primary_off text-text_primary
	"
	id="about"
>
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="w-100 pb-12 md:-mt-8 md:pb-6">
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
<div class="w-full bg-primary">
	<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		width="100%"
	>
		<path
			class="primarybg"
			d="M1920-41v76.49c-88.45,12.27-174.52,25.08-300.69,25.08c-238.24,0-333.54-45.98-571.79-47.17s-333.55,39.67-571.8,41.45
	C271.87,56.38,174.85,34.71,0,25.44V-41H1920z"
		/>
	</svg>
</div>
<section class="flex scroll-mt-24 flex-col bg-primary" id="community">
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
			class="container mx-auto flex flex-col items-center justify-center md:flex-row md:flex-wrap"
		>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="rounded-lg bg-white p-6 shadow-lg">
					<span class="pb-4 text-xl font-bold"
						>{$LL.CONTRIBUTE_CONTRIBUTE()}</span
					>
					<p class="text-xl">
						{$LL.CONTRIBUTE_CONTRIBUTE_DESCRIPTION()}
					</p>
				</div>
			</div>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="rounded-lg bg-white p-6 shadow-lg">
					<p class="text-center text-xl">
						<span class="font-bold">{$LL.CONTRIBUTE_IMPROVE_LIFE()}</span>
						{$LL.CONTRIBUTE_IMPROVE_LIFE_DESCRIPTION()}
					</p>
				</div>
			</div>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="rounded-lg bg-white p-6 shadow-lg">
					<p class="text-center text-xl">
						<span class="font-bold">{$LL.CONTRIBUTE_LEARN_FROM_OTHERS()}</span>
						{$LL.CONTRIBUTE_LEARN_FROM_OTHERS_DESCRIPTION()}
					</p>
				</div>
			</div>
			<div class="w-full p-1 md:w-1/2 md:p-8">
				<div class="rounded-lg bg-white p-6 shadow-lg">
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

<style>
	.primarybg {
		fill: hsl(var(--twc-primary_off));
	}
</style>
