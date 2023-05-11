import { getPostsCollection } from "../../hooks.server";
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
