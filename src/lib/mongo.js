import { MongoClient } from "mongodb";

export function start_mongo() {
	console.log("Starting mongo...");
	return client.connect();
}

const client = await MongoClient.connect("mongodb://127.0.0.1:27017/");
const db = client.db("bookstore");
const collection = db.collection("books");
// export const books = await collection.find().toArray();
// console.log(books);
// client.close();

export default client.db();
