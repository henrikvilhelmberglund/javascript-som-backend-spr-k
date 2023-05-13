<script>
	import { fly } from "svelte/transition";
	import Footer from "$lib/Footer.svelte";
	import Post from "./Post.svelte";
	import { onMount } from "svelte";
	import { toNiceDate } from "$lib/helpers.js";
	import { enhance } from "$app/forms";
	import { clickOutside } from "$lib/actions";
	export let data;
	export let form;
	let showMessage = false;

	let creatingNewPost = false;
	let loaded = false;
	onMount(() => {
		loaded = true;
	});

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
				<Post bind:showMessage {post} />
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
				use:enhance
				use:clickOutside={() => (creatingNewPost = false)}
				on:submit={() => {
					creatingNewPost = false;
					showMessage = true;
					setTimeout(() => {
						showMessage = false;
					}, 2000);
				}}
				class="flex h-[100%] w-[50%] flex-col justify-between rounded bg-slate-100 p-8 [&>*]:m-1"
				action="?/newPost"
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

{#if loaded}
	{#if form?.successful && showMessage}
		<main
			transition:fly={{ y: 50 }}
			class:bg-green-200={form.type === "POST"}
			class:bg-red-200={form.type === "DELETE"}
			class:bg-blue-200={form.type === "PUT"}
			class="absolute left-[50%] top-[50%] translate-x-[-50%] rounded-xl p-12 text-center">
			{#if form.type === "POST"}
				<h1 class="text-4xl text-green-500">Successfully added new post!</h1>
			{:else if form.type === "DELETE"}
				<h1 class="text-4xl text-red-500">Successfully deleted post!</h1>
			{:else if form.type === "PUT"}
				<h1 class="text-4xl text-blue-500">Successfully updated post!</h1>
			{/if}
		</main>
	{/if}
{/if}

<Footer />
