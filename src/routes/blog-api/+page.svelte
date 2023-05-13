<script>
	import { fly } from "svelte/transition";
	import Footer from "$lib/Footer.svelte";
	import Post from "./PostAPI.svelte";
	import { onMount } from "svelte";
	import { toNiceDate } from "$lib/helpers.js";
	import { enhance } from "$app/forms";
	import { clickOutside } from "$lib/actions";
	import { invalidateAll } from "$app/navigation";
	import { messageStore } from "./stores";

	export let data;

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
				{#if post.title && post.content}
					<Post {post} />
				{:else}
					<div class="flex flex-row w-auto">
						<p class="text-xl text-red-500">Post with ID {post._id} has invalid data</p>
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
              class="pl-4"
							>❌</button>
					</div>
				{/if}
			{/each}
		{:else}
			<h2 class="text-2xl">There are no posts yet!</h2>
		{/if}
	</div>
</main>

{#if creatingNewPost}
	<div class="absolute left-0 top-56 w-full">
		<div class="flex h-96 w-full flex-col items-center justify-center">
			<!-- ? Add new post POST -->
			<form
				use:clickOutside={() => (creatingNewPost = false)}
				on:submit|preventDefault={async (event) => {
					// const data = await request.formData();
					const formData = new FormData(event.target);
					let { title, content, tags } = Object.fromEntries(formData);
					// date = new Date();
					const body = { title, content,  tags };

					const response = await fetch("http://localhost:5173/api/posts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(body),
					});
					const data = await response.json();

					console.log(data);
					creatingNewPost = false;
					$messageStore = { type: "POST" };
					setTimeout(() => {
						$messageStore = null;
					}, 2000);
					invalidateAll();
				}}
				class="flex h-[100%] w-[50%] flex-col justify-between rounded bg-slate-100 p-8 [&>*]:m-1"
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
	{#if $messageStore}
		<main
			transition:fly={{ y: 50 }}
			class:bg-green-200={$messageStore.type === "POST"}
			class:bg-red-200={$messageStore.type === "DELETE"}
			class:bg-blue-200={$messageStore.type === "PUT"}
			class="fixed left-[50%] top-[50%] translate-x-[-50%] rounded-xl p-12 text-center">
			{#if $messageStore.type === "POST"}
				<h1 class="text-4xl text-green-500">Successfully added new post!</h1>
			{:else if $messageStore.type === "DELETE"}
				<h1 class="text-4xl text-red-500">Successfully deleted post!</h1>
			{:else if $messageStore.type === "PUT"}
				<h1 class="text-4xl text-blue-500">Successfully updated post!</h1>
			{/if}
		</main>
	{/if}
{/if}

<Footer />
