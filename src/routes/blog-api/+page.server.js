import { getPostsCollection } from "/src/hooks.server";
import { ObjectId } from "mongodb";
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const postsCollection = await getPostsCollection();
	let result;
	// const latest = true;
	const latest = url.searchParams.get("latest");
	// console.log(latest);
	const limit = 0;

	if (latest === "false") {
		result = await postsCollection.find({}).limit(limit).toArray();
	} else {
		result = await postsCollection.find({}).sort({ date: -1 }).limit(parseInt(limit, 10)).toArray();
	}

	result.forEach((item) => {
		item._id = item._id.toString();
	});
	// console.log(result)

	// return { posts: [] };
	return { posts: result };
}

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	newPost: async ({ request }) => {
// 		const postsCollection = await getPostsCollection();
// 		// console.log(request.body);
// 		const data = await request.formData();
// 		let { title, content, tags } = Object.fromEntries(data);
// 		tags = tags.replaceAll(" ,", ",").split(",");
// 		console.log("Title:", title);
// 		console.log("Content:", content);
// 		console.log("Tags:", tags);
// 		const body = { title, content, date: new Date(), tags };

// 		// const body = await request.json();
// 		// const body = result.body;
// 		const result = await postsCollection.insertOne(body);
// 		result.insertedId = result.insertedId.toString();
// 		console.log(result);
// 		return { successful: true, type: "POST" };
// 	},
// 	deletePost: async ({ request }) => {
// 		const postsCollection = await getPostsCollection();

// 		const data = await request.formData();
// 		// let { id } = Object.fromEntries(data);
// 		const postId = data.get("post-id");
// 		const post = await postsCollection.findOne({
// 			_id: new ObjectId(postId),
// 		});
// 		// id = new ObjectId(id);
// 		console.log(post);
// 		const result = await postsCollection.deleteOne(post);
// 		// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
// 		console.log(result);
// 		// return json({
// 		//   result,
// 		// });
// 		return { successful: true, type: "DELETE" };
// 	},
// 	updatePost: async ({ request }) => {
// 		const postsCollection = await getPostsCollection();
// 		// console.log(request.body);
// 		const data = await request.formData();
// 		let { title, content, date, tags } = Object.fromEntries(data);
// 		date = new Date(date);
// 		tags = tags.replaceAll(" ,", ",").split(",");
// 		console.log("Title:", title);
// 		console.log("Content:", content);
// 		console.log("Tags:", tags);
// 		console.log("date", date);
// 		const body = { title, content, date, tags };
// 		console.log(body.date);
// 		const postId = data.get("post-id");
// 		const post = await postsCollection.findOne({
// 			_id: new ObjectId(postId),
// 		});
// 		// const body = await request.json();
// 		// const body = result.body;
// 		const result = await postsCollection.updateOne(post, { $set: body });
// 		// result.insertedId = result.insertedId.toString();
// 		console.log(result);
// 		return { successful: true, type: "PUT" };
// 	},
// };
