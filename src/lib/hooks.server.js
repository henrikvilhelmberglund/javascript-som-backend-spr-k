import { MongoClient, ObjectId } from "mongodb";

let client;

async function run() {
	try {
		client = new MongoClient("mongodb://127.0.0.1:27017");
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
		// const db = client.db("zoo");
		// const animalCollection = db.collection("animals");

		// console.log(postsCollection)
	} catch (error) {
		console.log(error);
	} finally {
		// await client.close();
	}
	return client;
}

export async function getPostsCollection() {
	const client = await run();
	const db = client.db("blog");
	return db.collection("posts");
}
