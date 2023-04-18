<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
</script>

<section class="flex h-screen bg-white">
	<div class="container mx-auto flex w-4/5 items-center justify-center px-8">
		<div class="flex flex-col md:flex-row">
			<div class="flex w-1/2 flex-col">
				<a href="/">{$LL.FOOTER_TOS()}</a><a href="/">{$LL.FOOTER_PRIVACY}</a>
			</div>
			<div class="flex w-1/2 flex-col">
				<h2>Contact us</h2>
				<p>Email: support@mylifeaudit.org</p>
				<p />
			</div>
		</div>
	</div>
</section>
