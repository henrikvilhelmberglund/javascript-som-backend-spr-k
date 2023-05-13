<script>
	import Footer from "$lib/Footer.svelte";
	import Post from "../../PostAPI.svelte";
	import { toNiceDate } from "$lib/helpers.js";

	export let data;
</script>

<main class="[&>*]:m-4">
  <div class="flex items-center justify-center gap-12">
    <h1 class="text-3xl">Blog</h1>
		{#each data.posts as post}
			<Post {post} />
		{/each}
	</div>
</main>

<Footer />
