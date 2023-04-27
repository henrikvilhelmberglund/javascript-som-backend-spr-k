<script>
	// export let data;
	import { getData } from "$lib/api";
	import { onMount } from "svelte";
	let myPromise;
	onMount(() => {
		myPromise = getData("/echo?message=hi");
	});

	let routes = ["/hello", "/echo?message=hi"];
</script>

<main class="m-4">
	lektion 2!

	{#each routes as route}
		<button class="bg-blue-400 p-2 rounded-xl mx-2" on:click={() => (myPromise = getData(route))}>{route}</button>
	{/each}
	<div>
		{#await myPromise}
			Loading...
		{:then value}
			{JSON.stringify(value)}
		{:catch error}
			{error}
		{/await}
	</div>
</main>

<style>
</style>
