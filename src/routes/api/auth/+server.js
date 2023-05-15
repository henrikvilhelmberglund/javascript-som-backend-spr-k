import { error, json } from "@sveltejs/kit";
import { getPostsCollection } from "$lib/hooks.server";
import chalk from "chalk";
/** @type {import('./$types').RequestHandler} */

const postsCollection = await getPostsCollection();

export async function GET({ url, request }) {
	return json({
		result,
	});
}

export async function POST({ url, request }) {
	const incomingBody = await request.json();
	// const body = result.body;
	let { title, content, tags } = incomingBody;
	// let { title, content, date, tags } = Object.fromEntries(formData);

	console.log(result);
	return json({
		result,
	});
}
