<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
</script>

<section class="flex min-h-screen justify-center bg-primary">
	<div class="w-3/5 pt-20 text-text_primary">
		<div class="py-2 text-3xl font-semibold">
			{$LL.RESOURCES_FOR_THE_CURIOUS()}
		</div>

		<div class="text-lg">{$LL.RESOURCES_CONTENT()}</div>
		<div class="pt-6 text-xl italic">{$LL.RESOURCES_WANT_TO_LEARN()}</div>
	</div>
</section>
