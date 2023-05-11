<script>
	import { toNiceDate } from "../../lib/helpers";

	export let post;
</script>

<div
	class="flex w-[60%] flex-col items-center rounded-md bg-gradient-to-b from-slate-200 to-slate-300 p-4">
	<h2 class="text-2xl">{post.title}</h2>
	<form class="absolute self-end" method="POST" action="/blog/formactions?/deletePost">
		<button name={post._id}>❌</button>
	</form>
	<p>{toNiceDate(post.date)}</p>
	<p class="text-lg">{post.content}</p>
	<div class="flex flex-row gap-2 self-end pt-9">
		{#each post.tags as tag}
			<a class="rounded-2xl bg-white p-1" href="/tag/{tag}">
				#{tag}
			</a>
		{/each}
	</div>
</div>

<style>
</style>
