<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import Header from '$lib/Header.svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { trpc } from '$lib/trpc';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	const queryClient = trpc.hydrateQueryClient(data.trpc);

	setLocale(data.locale);
</script>

<Header />
<Navbar />

<main>
	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>
</main>

<svelte:head>
	<title>{$page.data.title || 'typesafe-i18n'}</title>
	<HeadHrefLangs />
</svelte:head>
