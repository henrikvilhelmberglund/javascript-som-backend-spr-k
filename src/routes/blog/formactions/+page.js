import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
	// ! not used, just for remembering how to do client "redirect" with a timeout
	if (browser) {
		setTimeout(() => {
			goto("/blog");
			// throw redirect(307, "/blog");
		}, 1000);
	}
}
