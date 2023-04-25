import { books } from "$lib/books.js";

// let firstBook = books[0];
console.log(books);

export const load = async function () {
	const data = await books
		.find(
			{},
			{
				limit: 50,
				// projection: {
				// 	title: 1,
				// },
			}
		)
		.toArray();
	data.forEach((item) => {
		item._id = item._id.toString();
	});
	return {
		books: data,
	};
};
