import { browser } from "$app/environment";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	if (browser) {
		let state;
		let data;
    const res = await fetch("http://localhost:5173/api/auth/loggedin");
    console.log("+page.js", res)
		if (res.ok) {
			data = await res.json();
			console.log("+page.js", data);
			state = "logged in";
		} else {
			console.log("+page.js", data);
			state = "logged out";
		}
		return {
			user: data,
			state: state,
		};
	}
}
