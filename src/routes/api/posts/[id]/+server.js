import { error, json } from "@sveltejs/kit";
import { getPostsCollection } from "$lib/hooks.server";
import { ObjectId } from "mongodb";
import chalk from "chalk";
export async function GET({ params }) {
	const offsetNumber = +params.id - 1;
	const result = await getPostsCollection
		.find({})
		.skip(offsetNumber)
		.sort({ _id: 1 })
		.limit(1)
		.toArray();
	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	console.log(result);

	return json({
		result: result[0],
	});
}

// export async function PUT({ request, params }) {
// 	const body = await request.json();
// 	const offsetNumber = +params.id - 1;
// 	const post = await getPostsCollection
// 		.find({})
// 		.skip(offsetNumber)
// 		.sort({ _id: 1 })
// 		.limit(1)
// 		.toArray();

// 	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
// 	// const post = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
// 	const result = await getPostsCollection.updateOne(post[0], { $set: body });
// 	console.log(result);
// 	return json({
// 		result,
// 	});
// }

export async function DELETE({ params }) {
	// app.delete("/api/posts/:id", async (req, res) => {
	// ? function when you have ids lke 1, 2, 3 etc
	// const offsetNumber = +params.id - 1;
	// const foundPost = await postsCollection
	// 	.find({})
	// 	.skip(offsetNumber)
	// 	.sort({ _id: 1 })
	// 	.limit(1)
	// 	.toArray();
	//   const result = await postsCollection.deleteOne(foundPost[0]);

	// console.table({ a:"Welcome to the app!"});
	const postId = params.id;
	console.log(chalk.blue(params.id));

	const postsCollection = await getPostsCollection();

	const post = await postsCollection.findOne({
		_id: new ObjectId(postId),
	});
	console.log(postId);
	const result = await postsCollection.deleteOne(post);

	console.log(result);
	return json({
		result,
	});
}
