<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
</script>

<main
	class="flex min-h-screen flex-col-reverse items-center justify-center bg-primary text-text_primary md:flex-row"
>
	<div class="text-center">
		<h1 class="mb-4 text-4xl font-bold">{$LL.PAGE_TITLE()}</h1>
		<p class="text-xl">{$LL.BRAND_CLAIM()}</p>
		<a
			href="/signup"
			class="text-primary_text mt-8 inline-block rounded bg-brand px-6 py-3 font-bold transition duration-200 hover:bg-gray-200"
			>{$LL.BUTTON_AUDIT_NOW()}</a
		>
	</div>
	<div class="mt-8 sm:ml-8 sm:mt-0 md:ml-16 lg:ml-24 xl:ml-24">
		<img
			src="https://via.placeholder.com/400"
			alt="Placeholder"
			class="mx-auto sm:mx-0 sm:mt-4"
		/>
	</div>
</main>
<section class="flex h-screen bg-white">
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="w-100 p-8">
			<h2 class="mb-4 text-center text-3xl font-bold">{$LL.ABOUT_TITLE()}</h2>
			<p class="text-center">
				{$LL.ABOUT_CONTENT()}
			</p>
		</div>
	</div>
</section>
<section class="flex h-screen flex-col">
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center px-8 md:flex-row"
	>
		<div class="w-1/2">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
		<div class="w-1/2 p-8">
			<h2 class="mb-4 text-center text-3xl font-bold">{$LL.JOIN_US_TITLE()}</h2>
			<p class="text-center text-xl">
				{$LL.JOIN_US_CONTENT()}
			</p>
		</div>
	</div>
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center px-8 md:flex-row"
	>
		<div class="w-1/2 p-8">
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
		class="container mx-auto flex w-4/5 flex-col items-center justify-center px-8 md:flex-row"
	>
		<div class="w-1/2">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
		<div class="w-1/2 p-8">
			<p class="text-center text-xl">
				<span class="font-bold">{$LL.JOIN_US_IMPROVE_LIFE()}</span>
				{$LL.JOIN_US_IMPROVE_LIFE_DESCRIPTION()}
			</p>
		</div>
	</div>
	<div
		class="container mx-auto flex w-4/5 flex-col items-center justify-center px-8 md:flex-row"
	>
		<div class="w-1/2 p-8">
			<p class="text-center text-xl">
				<span class="font-bold">{$LL.JOIN_US_LEARN_FROM_OTHERS()}</span>
				{$LL.JOIN_US_LEARN_FROM_OTHERS_DESCRIPTION()}
			</p>
		</div>
		<div class="flex h-full w-1/2 items-center justify-center">
			<img
				src="https://via.placeholder.com/400"
				alt="Placeholder"
				class="mx-auto sm:mx-0 sm:mt-4"
			/>
		</div>
	</div>
</section>
