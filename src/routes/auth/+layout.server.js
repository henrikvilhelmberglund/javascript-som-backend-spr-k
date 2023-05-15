/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	console.log("+layout.server.js", locals);
	// return {
	// 	user: locals,
	// };
}
