import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";
import chalk from "chalk";
/** @type {import('./$types').RequestHandler} */

export async function GET({ url, locals }) {
	console.log("+server.js /loggedin", locals);
	if (Object.keys(locals).length > 0) {
		return json(locals);
	} else {
		throw error(401, "Not authorized");
	}
}
