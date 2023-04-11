<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
</script>

<header>
	<a href="/{$locale}">
		<div class="bg-orange-400"><h1>typesafe-i18n</h1></div>
	</a>
	<LocaleSwitcher />
</header>
