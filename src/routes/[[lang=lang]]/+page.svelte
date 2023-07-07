<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import { goto } from '$app/navigation';
	import { locale } from '../../i18n/i18n-svelte';
	import { slide } from 'svelte/transition';
	import LandingPageContributionCard from '$lib/components/LandingPageContributionCard.svelte';
</script>

<main
	transition:slide
	class="flex min-h-screen flex-col-reverse items-center justify-center bg-primary text-text_primary md:flex-row md:pb-4 md:pt-10"
>
	<div class="w-4/5 text-center md:w-3/5">
		<h1 class="text-2xl italic md:text-3xl">{$LL.PAGE_TITLE()}</h1>
		<h1 class="text-4xl font-bold leading-tight md:text-5xl">
			{$LL.BRAND_CLAIM()}
		</h1>
		<button
			on:click={() => {
				goto($locale + '/audit');
			}}
			class="mt-8 inline-block rounded bg-brand_teal px-6 py-3 font-bold text-white transition duration-150 hover:bg-brand_teal_dark"
		>
			{$LL.BUTTON_AUDIT_NOW()}
		</button>
	</div>
</main>

<section
	class="mt-0 flex min-h-screen scroll-mt-24 bg-primary_off text-text_primary"
	id="about"
>
	<div class="container mx-auto flex w-4/5 items-center py-12">
		<div class="w-100 pb-12 md:pb-6">
			<h2 class="mb-4 text-5xl md:text-6xl">{$LL.ABOUT_TITLE()}</h2>
			<p class="text-lg md:text-xl">{$LL.ABOUT_CONTENT()}</p>
			<h3 class="py-4 text-2xl md:text-4xl">{$LL.ABOUT_CLAIM()}</h3>
			<p class="text-lg md:text-xl">{$LL.ABOUT_CONTENT_P2()}</p>
		</div>
	</div>
</section>

<section
	class="mt-0 flex scroll-mt-24 bg-primary text-text_primary"
	id="community"
>
	<div class="container mx-auto flex w-4/5 py-12">
		<div class="w-100 pb-12 md:pb-6">
			<h2 class="mb-4 text-5xl md:text-6xl">{$LL.COMMUNITY_TITLE()}</h2>
			<p class="text-xl">{$LL.COMMUNITY_CONTENT()}</p>
		</div>
	</div>
</section>

<section
	class="-mt-0.5 flex scroll-mt-24 bg-primary text-text_primary"
	id="contribute"
>
	<div class="container mx-auto flex w-4/5 flex-col py-12">
		<div class="w-100 pb-12 md:pb-6">
			<h2 class="text-5xl md:text-6xl">{$LL.CONTRIBUTE_TITLE()}</h2>
			<p class="text-xl">{$LL.CONTRIBUTE_CONTRIBUTE()}</p>
		</div>
		<div
			class="flex flex-col justify-between text-text_primary md:flex-row md:flex-wrap"
		>
			<LandingPageContributionCard
				title={$LL.CONTRIBUTE_CONTRIBUTE()}
				content={$LL.CONTRIBUTE_CONTRIBUTE_DESCRIPTION()}
			/>

			<LandingPageContributionCard
				title={$LL.CONTRIBUTE_LEARN_FROM_OTHERS()}
				content={$LL.CONTRIBUTE_LEARN_FROM_OTHERS_DESCRIPTION()}
			/>

			<LandingPageContributionCard
				title={$LL.CONTRIBUTE_MEET_PEOPLE()}
				content={$LL.CONTRIBUTE_MEET_PEOPLE_DESCRIPTION()}
			/>

			<LandingPageContributionCard
				title={$LL.CONTRIBUTE_IMPROVE_LIFE()}
				content={$LL.CONTRIBUTE_IMPROVE_LIFE_DESCRIPTION()}
			/>
		</div>
	</div>
</section>

<Footer />
