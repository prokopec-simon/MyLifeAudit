<script lang="ts">
	export let title;
	export let content;
</script>

<div
	class="my-6 flex h-64 w-full flex-col rounded-lg bg-primary_off p-6 text-lg shadow-md md:h-48 md:w-[48%] md:text-xl"
>
	<h2 class="pb-2 text-3xl md:pb-3">{title}</h2>
	<p>
		{content}
	</p>
</div>
