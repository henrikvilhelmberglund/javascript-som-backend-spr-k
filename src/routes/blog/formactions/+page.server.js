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
	},
	deletePost: async ({ request }) => {
		const postsCollection = await getPostsCollection();
		// app.delete("/api/posts/:id", async (req, res) => {
		// const offsetNumber = +params.id - 1;
		// const foundPost = await postsCollection
		//   .find({})
		//   .skip(offsetNumber)
		//   .sort({ _id: 1 })
		//   .limit(1)
		//   .toArray();

		const data = await request.formData();
		let { id } = Object.fromEntries(data);
		// id = new ObjectId(id);
		console.log(id);
		const result = await postsCollection.deleteOne(id);
		// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
		console.log(result);
		// return json({
		//   result,
		// });
		return { deleted: true };
	},
};
