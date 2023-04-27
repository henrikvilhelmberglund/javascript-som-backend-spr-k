function greetUser() {
	const urlParams = new URLSearchParams(window.location.search);
	const { username, password } = Object.fromEntries(urlParams.entries());
	// const username = urlParams.get("username");
	// const password = urlParams.get("password");

	if (!username && !password) {
		return false;
	}

	const h1 = document.createElement("h1");
	h1.innerHTML = `Welcome ${username}! Your password is ${password}! Keep it safe!`;

	document.body.append(h1);

	const img = document.createElement("img");
	img.src = "http://127.0.0.1:3002/mergeconflict.gif";
	document.body.append(img);
}

greetUser();
