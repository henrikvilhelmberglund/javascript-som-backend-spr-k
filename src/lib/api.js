export async function getData(route) {
	const url = `http://127.0.0.1:3000${route ?? ""}`;
	console.log(url);
	const res = await fetch(url);
	const data = res.json();
	// const data = await res.json();

	// console.log("Got data from API!", data);
	return data;
}

export async function postData(route, formData) {
	const url = `http://127.0.0.1:3000${route ?? ""}`;
	console.log(url);
	const res = await fetch(url, { method: "POST" });
	const data = res.json();
	// const data = await res.json();

	// console.log("Got data from API!", data);
	return data;
}
