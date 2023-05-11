<script>
	import { toNiceDate } from "../../lib/helpers";

	export let post;

	let isEditing = false;
</script>

<div
	class="flex w-[60%] flex-col items-center rounded-md bg-gradient-to-b from-slate-200 to-slate-300 p-4">
	<h2 class="text-2xl">{post.title}</h2>
	<button class="absolute mr-12 self-end" on:click={() => (isEditing = true)}>🖋</button>
	<form class="absolute self-end" method="POST" action="/blog?/deletePost">
		<button name="post-id" value={post._id}>❌</button>
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

{#if isEditing}
	<form
		class="flex h-[100%] w-[50%] flex-col justify-between rounded bg-slate-100 p-8 [&>*]:m-1"
		action="/blog?/updatePost"
		method="POST">
		<input
			type="text"
			name="title"
			value={post.title}
			class="outline-px rounded-sm p-1 outline"
			placeholder="Title" />
		<textarea class="p-1" value={post.content} name="content" id="" cols="30" rows="10" />
		<input
			type="text"
			name="tags"
			value={post.tags}
			class="outline-px rounded-sm p-1 outline"
			placeholder="Tags separated by commas" />
		<button name="post-id" value={post._id} class="rounded bg-blue-400 p-4 hover:bg-blue-300"
			>Update post</button>
	</form>
{/if}

<style>
</style>
