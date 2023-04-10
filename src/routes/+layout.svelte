<script lang="ts">
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';
	import { trpc } from '$lib/trpc';
	import LL, { setLocale } from '../i18n/i18n-svelte';

	export let data: LayoutData;

	const queryClient = trpc.hydrateQueryClient(data.trpc);
	setLocale(data.locales);
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
