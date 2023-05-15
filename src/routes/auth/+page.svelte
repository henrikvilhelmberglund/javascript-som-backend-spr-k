<script>
	import { beforeUpdate } from "svelte";
	// let state = "logged out";
	let user;
	let pass;
	let fetchData;

	let error = {};

	export let data;
</script>
{data.state}
<main class="[&>*]:m-4">
	<h1 class="text-5xl">Auth page</h1>
	{#if data.state === "logged out"}
		<h2 class="text-4xl">Login</h2>
		{#if Object.keys(error).length}
			<!-- <h3 class="text-4xl">{error.status}: {error.text}</h3> -->
			<p class="text-red-500">Credentials are wrong. Please try again.</p>
		{/if}
		<div id="login-div">
			<form
				on:submit|preventDefault={async () => {
					const res = await fetch("http://localhost:5173/api/auth/login", {
						method: "POST",
						body: JSON.stringify({ user, pass }),
					});
					if (res.ok) {
						fetchData = await res.json();
						console.log(fetchData);
						data.state = "logged in";
					} else {
						error = { status: 401, text: "Unauthorized" };
					}
				}}
				class="m-4 flex w-96 flex-col gap-4"
				id="login"
				action="">
				<input
					type="text"
					bind:value={user}
					placeholder="Username"
					class="rounded p-1 outline outline-1"
					name="username"
					id="username" />
				<input
					type="text"
					bind:value={pass}
					placeholder="Password"
					class="rounded p-1 outline outline-1"
					name="password"
					id="password" />
				<button class="rounded-lg bg-green-400 p-2 hover:bg-green-300">Login</button>
			</form>
		</div>
	{:else if data.state === "logged in"}
		<div>
			<h2 class="text-4xl">Welcome {data.user?.user}!</h2>
		</div>
		<button
			on:click={async () => {
				const res = await fetch("http://localhost:5173/api/auth/logout", {
					method: "POST",
					body: JSON.stringify({ logout: true }),
				});
				if (res.ok) {
					fetchData = await res.json();
					console.log(fetchData);
					data.state = "logged out";
				} else {
					error = { status: 401, text: "Unauthorized???" };
				}
			}}
			class="rounded-lg bg-orange-500 p-2 hover:bg-orange-400">Log out</button>
	{/if}
</main>

<style>
</style>
