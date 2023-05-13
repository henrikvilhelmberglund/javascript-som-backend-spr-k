<script>
	import Footer from "$lib/Footer.svelte";
	import Post from "../../PostAPI.svelte";
	import { toNiceDate } from "$lib/helpers.js";
	import { page } from "$app/stores";

	export let data;
</script>

<main class="[&>*]:m-4">
  <div class="flex flex-col items-center justify-center gap-12">
    <h1 class="text-3xl">Posts tagged with #{$page.params.tagname} </h1>
		{#each data.posts as post}
			<Post {post} />
		{/each}
	</div>
</main>

<Footer />
