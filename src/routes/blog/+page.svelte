<script>
	import Footer from "$lib/Footer.svelte";
	import Post from "./Post.svelte";
	import { toNiceDate } from "$lib/helpers.js";
	export let data;

	let creatingNewPost = false;

	const blogPost = {
		title: "The best title",
		content: "The best content aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
		date: new Date(),
		tags: "best post, awesome tags",
	};
</script>

<main class="[&>*]:m-4">
	<div class="flex flex-col items-center justify-center gap-12">
		<h1 class="text-3xl">Blog</h1>
		<button
			on:click={() => (creatingNewPost = true)}
			class="mr-[20%] self-end rounded-lg bg-green-400 p-2 hover:bg-green-300">Add new post</button>
		{#if data.posts.length > 0}
			{#each data.posts as post}
				<Post {post} />
			{/each}
		{:else}
			<h2 class="text-2xl">There are no posts yet!</h2>
		{/if}
	</div>
</main>

{#if creatingNewPost}
	<div class="absolute left-0 top-56 w-full">
		<div class="flex h-96 w-full flex-col items-center justify-center">
			<form
				class="flex h-[100%] w-[50%] flex-col justify-between rounded bg-slate-100 p-8 [&>*]:m-1"
				action="/blog/formactions?/newPost"
				method="POST">
				<input
					type="text"
					name="title"
					bind:value={blogPost.title}
					class="outline-px rounded-sm p-1 outline"
					placeholder="Title" />
				<textarea
					class="p-1"
					bind:value={blogPost.content}
					name="content"
					id=""
					cols="30"
					rows="10" />
				<input
					type="text"
					name="tags"
					bind:value={blogPost.tags}
					class="outline-px rounded-sm p-1 outline"
					placeholder="Tags separated by commas" />
				<button class="rounded bg-green-400 p-4 hover:bg-green-300">Create new post</button>
			</form>
		</div>
	</div>
{/if}

<Footer />
