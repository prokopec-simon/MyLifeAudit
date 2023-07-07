<script lang="ts">
	import Dropdown from '../components/DropdownMenu.svelte';
	import { writable } from 'svelte/store';
	import { setLocale, locale } from '../../i18n/i18n-svelte';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { replaceLocaleInUrl } from '../../utils';
	import CircleFlagsCz from '~icons/circle-flags/cz';
	import CircleFlagsUs from '~icons/circle-flags/us';
	import MdiCheckboxBlankCircle from '~icons/mdi/checkbox-blank-circle';
	import { colors } from '../../colorThemes';
	import { onMount } from 'svelte';
	import SolarSun2Bold from '~icons/solar/sun-2-bold';
	import PhMoonFill from '~icons/ph/moon-fill';

	const themeStore = writable('');

	onMount(() => {
		themeStore.set(getTheme());
	});

	function getTheme() {
		if (typeof document === 'undefined') {
			return '';
		}

		const themePrefix = 'theme-';
		const currentTheme = Array.from(document.documentElement.classList).find(
			(className) => className.startsWith(themePrefix)
		);

		return currentTheme || '';
	}

	function changeColorTheme() {
		const themePrefix = 'theme-';
		const currentTheme = Array.from(document.documentElement.classList).find(
			(className) => className.startsWith(themePrefix)
		);

		if (currentTheme) {
			document.documentElement.classList.remove(currentTheme);
		}

		const newTheme =
			currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
		document.documentElement.classList.add(newTheme);
		themeStore.set(newTheme);
	}
</script>

<div>
	<button
		on:click={() => changeColorTheme()}
		class="mr-2 mt-2 text-xl"
		aria-label="Theme switch"
	>
		{#if $themeStore === 'theme-light'}
			<SolarSun2Bold />
		{:else}
			<PhMoonFill />
		{/if}
	</button>
</div>
