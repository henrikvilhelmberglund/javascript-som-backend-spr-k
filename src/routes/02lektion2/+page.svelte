<script>
	// export let data;
	import { getData } from "$lib/api";
	import { onMount } from "svelte";
	let myPromise;
	onMount(() => {
		myPromise = getData();
	});
</script>

<main class="m-4">
	lektion 2!

	{#await myPromise}
		Loading...
	{:then value}
		{JSON.stringify(value)}
	{:catch error}
		{error}
	{/await}
</main>

<style>
</style>
