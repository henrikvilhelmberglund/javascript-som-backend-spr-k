<script>
	let state = "logged out";
</script>

<main class="[&>*]:m-4">
	<h1 class="text-5xl">Auth page</h1>
	{#if state === "logged out"}
		<h2 class="text-4xl">Login</h2>
    
	{/if}
</main>

<style>
</style>
