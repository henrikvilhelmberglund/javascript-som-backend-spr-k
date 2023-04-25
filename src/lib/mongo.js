import { MongoClient } from "mongodb";

export function start_mongo() {
	console.log("Starting mongo...");
	return client.connect();
}

const client = await MongoClient.connect("mongodb://localhost:27017/bookstore");
const db = client.db();
const collection = db.collection("books");
// export const books = await collection.find().toArray();
// console.log(books);
// client.close();

export default client.db();
