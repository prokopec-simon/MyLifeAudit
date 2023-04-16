<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { trpc } from '$lib/trpc';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data: LayoutData;
	const queryClient = trpc.hydrateQueryClient(data.trpc);
	console.log('LayoutData:', $page.data);
	setLocale(data.locale);
</script>

<Navbar />

<main>
	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>
</main>

<svelte:head>
	<title>{$page.data.title}</title>
	<HeadHrefLangs />
</svelte:head>
