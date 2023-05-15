import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";

import chalk from "chalk";
import { getUsersCollection, updateHookedUser } from "../../../../hooks.server";
/** @type {import('./$types').RequestHandler} */

// export async function GET({ url, request }) {
// 	return json({
// 		result,
// 	});
// }

export async function POST({ url, request, cookies, locals }) {
	const incomingBody = await request.json();
	const usersCollection = await getUsersCollection();
	// const body = result.body;
	let { user, pass } = incomingBody;
	// let { title, content, date, tags } = Object.fromEntries(formData);

	const incomingUser = await usersCollection.findOne({ user, pass });
	console.log(incomingUser);
	if (incomingUser) {
		cookies.set("session", uuidv4(), {
			httpOnly: true,
			sameSite: "strict",
			secure: false,
			path: "/",
			maxAge: 60 * 60 * 24 * 7,
		});
		locals = {
			user: user,
		};
		console.log("+server.js /login", locals);
		updateHookedUser(user);
		return json({
			user: user.user,
		});
	} else {
		throw error(401, "Not authorized");
	}
}
