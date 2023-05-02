<script>
	export let data;
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
</main>

<style>
</style>
