<script lang="ts">
	import { trpc } from '$lib/trpc';
	import Navbar from '../../lib/components/Navbar.svelte';

	import { setLocale, locale, LL } from '$i18n/i18n-svelte';

	let greeting = 'press the button to load data';
	let loading = true;
	const data = trpc.greeting.query({ name: 'TrpcTest' });
	data.subscribe(
		(data) => ((loading = data.isLoading), (greeting = data.data ?? ''))
	);
</script>

<main
	class="flex min-h-screen items-center justify-center bg-blue-500 text-white"
>
	<div class="text-center">
		<h1 class="mb-4 text-4xl font-bold">{$LL.PAGE_TITLE()}</h1>
		<p class="text-xl">Assess Your Life and Make It Better</p>
		<p class="mt-4">
			Get a comprehensive evaluation of your life and actionable recommendations
			for improvement.
		</p>
		<a
			href="/signup"
			class="mt-8 inline-block rounded bg-white px-6 py-3 font-bold text-blue-500 transition duration-200 hover:bg-gray-200"
			>Audit now!</a
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
<!-- <section>{$LL.welcome({ year: 2020 })}</section>
{loading}
<p>{greeting}</p> -->

<section class="flex h-screen bg-white">
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="w-1/2 p-8">
			<h2 class="mb-4 text-center text-3xl font-bold">About Us</h2>
			<p class="text-center text-xl">
				If you feel like you need to do a Life Audit, you'll realise that you
				should have done this a long time ago. Well it's never too late to
				retake control of your life.
			</p>
			<p class="mt-4 text-center">
				Our mission is to provide you with a comprehensive evaluation of your
				life and actionable recommendations for improvement. With our expert
				guidance, you can gain valuable insights into various aspects of your
				life, such as health, relationships, career, and personal growth. Our
				goal is to empower you to make informed decisions and take steps towards
				a happier, healthier, and more fulfilling life.
			</p>
		</div>
		<div class="w-1/2 bg-gray-300 p-8" style="height: 80vh;">
			<div class="flex h-full items-center justify-center">
				<p class="text-3xl font-bold">Image Placeholder</p>
			</div>
		</div>
	</div>
</section>
<section class="flex h-screen bg-blue-500 text-white">
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="w-1/2 bg-gray-300 p-8" style="height: 80vh;">
			<div class="flex h-full items-center justify-center">
				<p class="text-3xl font-bold">Image Placeholder</p>
			</div>
		</div>
		<div class="w-1/2 p-8">
			<h2 class="mb-4 text-center text-3xl font-bold">Join Us</h2>
			<p class="text-center text-xl">
				Join our community and be a part of something meaningful. Help create
				something that benefits others and makes a positive impact on their
				lives.
			</p>
			<ul class="mt-4 list-disc text-center">
				<li class="my-2">
					<span class="font-bold">Contribute:</span> You can help others by providing
					valuable insights and support through our platform.
				</li>
				<li class="my-2">
					<span class="font-bold">Learn:</span> You can learn from others by receiving
					help and guidance on various aspects of life.
				</li>
				<li class="my-2">
					<span class="font-bold">Improve:</span> You can improve your own life by
					engaging in a hobby or activity that enhances your personal growth.
				</li>
			</ul>
		</div>
	</div>
</section>
