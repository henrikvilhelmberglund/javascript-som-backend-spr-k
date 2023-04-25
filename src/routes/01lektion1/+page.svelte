<script>
	export let data;
	console.log(data.books);
</script>

<main class="[&>*]:m-4">
	{#each data.books as object}
		{#each Object.entries(object) as [key, value]}
			<p class="text-2xl">{key}:{value}</p>
		{/each}
	{/each}
</main>

<style>
</style>
