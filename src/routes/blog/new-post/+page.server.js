import { redirect } from "@sveltejs/kit";
import { getPostsCollection } from "../../../hooks.server";

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

		// ! seems bugged
		// setTimeout(() => {
		throw redirect("302", "/blog");
		// }, 2000);
	},
};
