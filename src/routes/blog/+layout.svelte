<script>
	import Nav from "$lib/Nav.svelte";

	const routes = [
		{ link: "/", display: "Blog home" },
		{ link: "/add-post", display: "Add post" },
	];
	const prefix = "/blog";
</script>

<Nav {routes} {prefix} level={2} />

<slot />

<style uno:preflights uno:safelist global></style>
