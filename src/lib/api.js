export async function getData(route) {
	const url = `http://127.0.0.1:3000/`;
	console.log(url);
	const res = fetch(url);
	// const data = res.json();
	// const data = await res.json();

	console.log("Got data from API!", res);
	return res;
}
