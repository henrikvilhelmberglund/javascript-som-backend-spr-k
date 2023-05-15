<script>
	import { beforeUpdate } from "svelte";
	// let state = "logged out";
	let user;
	let pass;
	let fetchData;

	let mode = "login";

	let error = {};

	export let data;

	async function getUser() {
		let state;
		let data;
		const res = await fetch("http://localhost:5173/api/auth/loggedin");
		console.log("+page.js", res);
		if (res.ok) {
			data = await res.json();
			console.log("+page.js", data);
			state = "logged in";
		} else {
			console.log("+page.js", data);
			state = "logged out";
		}
		return {
			user: data,
			state: state,
		};
	}
</script>

{data.state}
<main class="[&>*]:m-4">
	<h1 class="text-5xl">Auth page</h1>
	{#if data.state === "logged out"}
		<h2 class="text-4xl">{mode === "login" ? "Login" : "Register"}</h2>
		<button
			on:click={() => (mode === "login" ? (mode = "register") : (mode = "login"))}
			class="rounded-lg bg-emerald-500 p-2 hover:bg-emerald-400"
			>{mode === "login" ? "Register" : "Login"}</button>
		{#if mode === "login" && Object.keys(error).length}
			<!-- <h3 class="text-4xl">{error.status}: {error.text}</h3> -->
			<p class="text-red-500">Credentials are wrong. Please try again.</p>
		{/if}
		<div id="{mode}-div">
			<form
				on:submit|preventDefault={async () => {
					const res = await fetch(
						`http://localhost:5173/api/auth/${mode === "login" ? "login" : "register"}`,
						{
							method: "POST",
							body: JSON.stringify({ user, pass }),
						}
					);
					if (res.ok) {
						fetchData = await res.json();
						console.log(fetchData);
						data.state = mode === "login" ? "logged in" : "registered";
					} else {
						error = { status: 401, text: "Unauthorized" };
					}
				}}
				class="m-4 flex w-96 flex-col gap-4"
				id={mode}
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
				<button
					class:bg-green-400={mode === "login"}
					class:hover-bg-green-300={mode === "login"}
					class:bg-blue-400={mode === "register"}
					class:hover-bg-blue-300={mode === "register"}
					class="rounded-lg bg-green-400 p-2">{mode === "login" ? "Login" : "Register"}</button>
			</form>
		</div>
	{:else if data.state === "logged in"}
		<div>
			<h2 class="text-4xl">Welcome {data.user.user ?? getUser().user}!</h2>
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
	{:else if data.state === "registered"}
		<div>
			<h2 class="text-4xl">Successfully registered new user!</h2>
			<button
				on:click={() => location.reload()}
				class="my-4 inline-block rounded-lg bg-blue-300 p-2 hover:bg-blue-200">Go back</button>
		</div>
	{/if}
</main>

<style>
</style>
