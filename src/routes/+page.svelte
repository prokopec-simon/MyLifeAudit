<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc';
	import Navbar from '../lib/components/Navbar.svelte';

	let greeting = 'press the button to load data';
	let loading = true;

	const data = trpc.greeting.query({ name: 'TrpcTest' });
	data.subscribe(
		(data) => ((loading = data.isLoading), (greeting = data.data ?? ''))
	);
</script>

<svelte:head>
	<title>Life Audit - Assess Your Life</title>
</svelte:head>
<Navbar />
<main
	class="flex min-h-screen items-center justify-center bg-blue-500 text-white"
>
	<div class="text-center">
		<h1 class="mb-4 text-4xl font-bold">Life Audit</h1>
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
</main>
