<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import ContactForm from '../../lib/components/ContactForm.svelte';
	import { goto } from '$app/navigation';
	import { setLocale, locale } from '../../i18n/i18n-svelte';
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
<section class="mt-0 flex bg-brand_teal">
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="w-100 p-1 md:p-8">
			<h2 class="mb-4 text-center text-3xl font-semibold">
				{$LL.ABOUT_TITLE()}
			</h2>
			<p class="text-center">
				{$LL.ABOUT_CONTENT()}
			</p>
		</div>
	</div>
</section>
<section class="flex flex-col">
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row"
	>
		<div class="w-1/2">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
		<div class="w-1/2 p-1 md:p-8">
			<h2 class="mb-4 text-center text-3xl font-bold">{$LL.JOIN_US_TITLE()}</h2>
			<p class="text-center text-xl">
				{$LL.JOIN_US_CONTENT()}
			</p>
		</div>
	</div>
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row"
	>
		<div class="w-1/2 p-1 md:p-8">
			<p class="text-center text-xl">
				<span class="font-bold">{$LL.JOIN_US_CONTRIBUTE()}</span>
				{$LL.JOIN_US_CONTRIBUTE_DESCRIPTION()}
			</p>
		</div>
		<div class="w-1/2">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
	</div>
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row"
	>
		<div class="w-1/2">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
		<div class="w-1/2 p-1 md:p-8">
			<p class="text-center text-xl">
				<span class="font-bold">{$LL.JOIN_US_IMPROVE_LIFE()}</span>
				{$LL.JOIN_US_IMPROVE_LIFE_DESCRIPTION()}
			</p>
		</div>
	</div>
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row"
	>
		<div class="w-1/2 p-1 md:p-8" />
		<p class="text-center text-xl">
			<span class="font-bold">{$LL.JOIN_US_LEARN_FROM_OTHERS()}</span>
			{$LL.JOIN_US_LEARN_FROM_OTHERS_DESCRIPTION()}
		</p>
		<div class="flex h-full w-1/2 items-center justify-center">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
	</div>
</section>
<ContactForm />
<Footer />
