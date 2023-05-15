import { MongoClient, ObjectId } from "mongodb";

let client;

export const handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get("session");

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	// const user = await db.user.findUnique({
	//   where: { userAuthToken: session },
	//   select: { username: true, role: true },
	// })

	// if `user` exists set `events.local`
	// if (user) {
	event.locals.user = "admin";
	console.log("hooks", event.locals);
	// }

	// load page as normal
	return await resolve(event);
};

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
