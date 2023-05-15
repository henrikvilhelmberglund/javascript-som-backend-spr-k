<script>
	import { browser } from "$app/environment";

	const createCookie = () => {
		if (browser) {
			document.cookie = "name=Henrik";
			document.cookie = "profession=Frontend Developer";
			console.log(document.cookie);
		}
	};
	createCookie();
</script>

<style>
</style>
