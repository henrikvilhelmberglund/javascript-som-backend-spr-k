<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	export let form;

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	{#if form?.successful}
		<main in:fly={{ y: 50 }} 
    class="absolute left-[50%] top-[50%] translate-x-[-25%]">
			{#if form.type === "POST"}
				<h1 class="text-4xl text-green-500">Successfully added new post!</h1>
			{:else if form.type === "DELETE"}
				<h1 class="text-4xl text-red-500">Successfully deleted post!</h1>
			{/if}
		</main>
	{/if}
{/if}

<style>
</style>
