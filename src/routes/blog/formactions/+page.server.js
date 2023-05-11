import { redirect } from "@sveltejs/kit";
import { getPostsCollection } from "../../../hooks.server";
import { ObjectId } from "mongodb";

/** @type {import('./$types').Actions} */
export const actions = {
	newPost: async ({ request }) => {
		const postsCollection = await getPostsCollection();
		// console.log(request.body);
		const data = await request.formData();
		let { title, content, tags } = Object.fromEntries(data);
		tags = tags.replaceAll(" ,", ",").split(",");
		console.log("Title:", title);
		console.log("Content:", content);
		console.log("Tags:", tags);
		const body = { title, content, date: new Date(), tags };

		// const body = await request.json();
		// const body = result.body;
		const result = await postsCollection.insertOne(body);
		result.insertedId = result.insertedId.toString();
		console.log(result);
		return { successful: true, type: "POST" };
	},
	deletePost: async ({ request }) => {
		const postsCollection = await getPostsCollection();

		const data = await request.formData();
		// let { id } = Object.fromEntries(data);
		const postId = data.get("post-id");
		const post = await postsCollection.findOne({
			_id: new ObjectId(postId),
		});
		// id = new ObjectId(id);
		console.log(post);
		const result = await postsCollection.deleteOne(post);
		// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
		console.log(result);
		// return json({
		//   result,
		// });
		return { successful: true, type: "DELETE" };
	},
};
