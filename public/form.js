function greetUser() {
	const urlParams = new URLSearchParams(window.location.search);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	if (!username && !password) {
		return false;
	}

	const h1 = document.createElement("h1");
	h1.innerHTML = `Welcome ${username}! Your password is ${password}! Keep it safe!`;

	document.body.append(h1);
}

greetUser();
