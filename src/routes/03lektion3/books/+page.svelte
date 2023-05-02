<script>
	export let data;

	const fields = ["title", "author", "year", "description"];
</script>

<main class="[&>*]:m-4">
	<ul>
		{#each data.books as book}
			<li>
				<a href="/03lektion3/book/{book._id}" class="underline-blue-500 underline">
					{book.title} by {book.author}
				</a>
			</li>
		{/each}
	</ul>

	<form method="post" action="/03lektion3/books">
		{#each fields as field}
			<label for={field}>{field}</label>
			<input type="text" id={field} name={field} />
			<br />
		{/each}

		<button class="rounded-lg bg-blue-500 p-2 hover:bg-blue-300">Save</button>
	</form>
</main>

<style>
</style>
