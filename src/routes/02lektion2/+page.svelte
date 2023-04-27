<script>
	import { getData } from "$lib/api";

	const myPromise = getData("json");
</script>

<main class="m-4">
	lektion 2!

	{#await myPromise}
		Loading...
	{:then value}
		{value}
	{:catch error}
		{error}
	{/await}
</main>

<style>
</style>
