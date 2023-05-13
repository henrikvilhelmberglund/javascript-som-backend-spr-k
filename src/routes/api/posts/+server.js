import { error, json } from "@sveltejs/kit";
import { getPostsCollection } from "$lib/hooks.server";
/** @type {import('./$types').RequestHandler} */

const postsCollection = await getPostsCollection();

export async function GET({ url, request }) {
	let result;
	const limit = parseInt(url.searchParams.get("limit", 10));
	const latest = url.searchParams.get("latest");
	console.log(latest);
	const tag = url.searchParams.get("tag");

	if (latest === "true") {
		result = await postsCollection
			.find(tag ? { tags: tag } : {})
			.sort({ date: -1 })
			.limit(parseInt(limit, 10))
			.toArray();
	} else {
		result = await postsCollection
			.find(tag ? { tags: tag } : {})
			.limit(limit)
			.toArray();
	}

	return json({
		result,
	});
}

export async function POST({ url, request }) {
	const body = await request.json();
	// const body = result.body;
	const result = await postsCollection.insertOne(body);
	console.log(result);
	return json({
		result,
	});
}
