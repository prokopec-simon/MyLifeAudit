<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { slide } from 'svelte/transition';
</script>

<main transition:slide class="min-h-screen bg-primary">
	<div class="mt-16 text-text_primary">{$LL.AGE.question()}</div>
	{$LL.AGE.type}
</main>
