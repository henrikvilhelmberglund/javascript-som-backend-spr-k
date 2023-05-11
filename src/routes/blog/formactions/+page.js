import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
	if (browser) {
		setTimeout(() => {
			goto("/blog");
			// throw redirect(307, "/blog");
		}, 1000);
	}
}
