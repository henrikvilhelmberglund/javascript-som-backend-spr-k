import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("library");
const booksCollection = db.collection("books");

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
    const data = await request.formData();
    console.log(data)
		// await booksCollection.insertOne(data);
		// res.json(books);
	},
};

/** @type {import('./$types').PageLoad} */
export async function load() {
	const books = await booksCollection.find({}).toArray();
	// res.json(books);
	books.forEach((item) => {
		item._id = item._id.toString();
	});

	return {
		books,
	};

	// res.render("books", { books });
}
