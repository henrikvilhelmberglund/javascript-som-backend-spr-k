import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";
import chalk from "chalk";
/** @type {import('./$types').RequestHandler} */

export async function POST({ url, request, cookies, locals }) {
	const incomingBody = await request.json();
	// const body = result.body;
	// let { title, content, date, tags } = Object.fromEntries(formData);
	cookies.delete("session", { path: "/" });
	// locals = null;
	console.log(locals);
	return json({
		logout: "Successful",
	});
}
