import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("library");
const booksCollection = db.collection("books");

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  console.log(params.slug)
	const book = await booksCollection.findOne({
		_id: new ObjectId(params.slug),
	});
	return {
		title: book.title,
		author: book.author,
		year: book.year,
		description: book.description,
	};
}
