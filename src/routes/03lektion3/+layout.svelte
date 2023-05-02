<script>
	import Nav from "$lib/Nav.svelte";
	// import "@unocss/reset/antfu.css";

	let prefix = "/03lektion3";
	let routes = ["/books"];
</script>

<!-- TODO: fix -->
<Nav {prefix} {routes} level={2} />

<slot />

<style>
</style>
