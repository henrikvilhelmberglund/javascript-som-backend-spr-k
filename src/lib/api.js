export async function getData(route) {
  const url = `http://localhost:3002/${route ?? ""}`;
  console.log(url);
	try {
		const res = await fetch(url);
		const data = await res.json();
		// const data = await res.json();

		console.log("Got data from API!", data);
		return data;
	} catch (error) {
		console.log("Something went wrong", error);
	}
}
