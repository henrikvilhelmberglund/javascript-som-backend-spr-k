import { getUsersCollection } from "../../../../hooks.server";
import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";

const usersCollection = await getUsersCollection();

import chalk from "chalk";
/** @type {import('./$types').RequestHandler} */

// export async function GET({ url, request }) {
// 	return json({
// 		result,
// 	});
// }

export async function POST({ url, request, cookies, locals }) {
	const incomingBody = await request.json();
	// const body = result.body;
	let { user, pass } = incomingBody;
	// let { title, content, date, tags } = Object.fromEntries(formData);

	usersCollection.insertOne({ user, pass });
	// cookies.set("session", uuidv4(), {
	// 	httpOnly: true,
	// 	sameSite: "strict",
	// 	secure: false,
	// 	path: "/",
	// 	maxAge: 60 * 60 * 24 * 7,
	// });
	// locals = {
	// 	user: user,
	// };
	console.log(locals);
	return json({
		user: user,
	});
}
