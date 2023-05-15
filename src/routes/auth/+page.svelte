<script>
	let state = "logged out";
</script>

<main class="[&>*]:m-4">
	<h1 class="text-5xl">Auth page</h1>
	{#if state === "logged out"}
		<h2 class="text-4xl">Login</h2>
		<div id="login-div">
			<form class="m-4 flex w-96 flex-col gap-4" id="login" action="">
				<input
					type="text"
					placeholder="Username"
					class="rounded p-1 outline outline-1"
					name="username"
					id="username" />
				<input
					type="text"
					placeholder="Password"
					class="rounded p-1 outline outline-1"
					name="password"
					id="password" />
				<button class="rounded-lg bg-green-400 p-2 hover:bg-green-300">Login</button>
			</form>
		</div>
	{/if}
</main>

<style>
</style>
