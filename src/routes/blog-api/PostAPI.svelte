<script>
	import { invalidateAll } from "$app/navigation";
	import { toNiceDate } from "../../lib/helpers";
	import { messageStore } from "./stores";

	export let post = {};

	let isEditing = false;
</script>

<div
	class="flex w-[60%] flex-col items-center rounded-md bg-gradient-to-b from-slate-200 to-slate-300 p-4">
	{#if !post.title || !post.content}
		<p class="text-xl text-red-500">Post with ID {post._id} has invalid data</p>
	{/if}
	<h2 class="text-2xl">{post.title}</h2>
	<button class="absolute mr-12 self-end" on:click={() => (isEditing = true)}>🖋</button>

	<button
		on:click={async (event) => {
			const response = await fetch(`http://localhost:5173/api/posts/${post._id}`, {
				method: "DELETE",
			});
			const data = await response.json();

			console.log(data);

			$messageStore = { type: "DELETE" };
			invalidateAll();
			setTimeout(() => {
				$messageStore = null;
			}, 2000);
		}}
		class="absolute self-end">❌</button>

	<p>{toNiceDate(post.date)}</p>
	<p class="text-lg">{post.content}</p>
	<div class="flex flex-row gap-2 self-end pt-9">
		{#each post.tags as tag}
			<a class="rounded-2xl bg-white p-1" href="/blog-api/tag/{tag}">
				#{tag}
			</a>
		{/each}
	</div>
</div>

{#if isEditing}
	<form
		on:submit|preventDefault={async () => {
			isEditing = false;

			const formData = new FormData(event.target);
			let { title, content, date, tags } = Object.fromEntries(formData);
			const body = { title, content, date, tags };

			const response = await fetch(`http://localhost:5173/api/posts/${post._id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			const data = await response.json();

			console.log(data);

			$messageStore = { type: "PUT" };
			setTimeout(() => {
				$messageStore = null;
			}, 2000);
			invalidateAll();
		}}
		class="flex h-[100%] w-[50%] flex-col justify-between rounded bg-slate-100 p-8 [&>*]:m-1">
		<input
			type="text"
			name="title"
			value={post.title}
			required
			class="outline-px rounded-sm p-1 outline"
			placeholder="Title" />
		<input type="text" name="date" value={post.date} class="hidden" placeholder="" />
		<textarea class="p-1" value={post.content} required name="content" id="" cols="30" rows="10" />
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
