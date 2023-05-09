const readHello = async () => {
	const response = await fetch("/api/hello");
	const data = await response.json();
	console.log(data);
};

readHello();

// console.log("hello world");
