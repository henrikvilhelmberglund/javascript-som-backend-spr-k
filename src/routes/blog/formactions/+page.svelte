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
	<main in:fly={{ y: 50 }} class="absolute left-[50%] top-[50%] translate-x-[-25%]">
		<h1 class="text-4xl text-green-500">Successfully added new post!</h1>
	</main>
{/if}

{#if form?.deleted}
	<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
	<p>Successfully deleted!</p>
{/if}

<style>
</style>
