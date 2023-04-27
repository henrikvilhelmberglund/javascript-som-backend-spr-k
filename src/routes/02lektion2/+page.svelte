<script>
	// export let data;
	import { getData, postData } from "$lib/api";
	import { onMount } from "svelte";
	let myPromise;
	// onMount(() => {
	// 	myPromise = getData("/echo?message=hi");
	// });

	let routes = ["/hello", "/echo?message=hi"];
</script>

<main class="m-4">
	lektion 2!

	{#each routes as route}
		<button class="mx-2 rounded-xl bg-blue-400 p-2" on:click={() => (myPromise = getData(route))}
			>{route}</button>
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
	<!-- ? how to send to API and get back response without leaving the page? -->
	<form
		form
		on:submit|preventDefault={async () => {
			let result = await postData("/svelteuser");
			console.log(result);
		}}
		action="http://127.0.0.1:3000/svelteuser"
		method="post">
		<input type="text" name="username" id="username" />
		<input type="password" name="password" id="password" />

		<button>Login</button>
	</form>
</main>

<style>
</style>
