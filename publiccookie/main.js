const loginDiv = document.querySelector("#login-div");
const loginForm = document.querySelector("#login");
const logoutForm = document.querySelector("#logout");
const loginName = document.querySelector("#username");
const loginPass = document.querySelector("#password");

const registerDiv = document.querySelector("#register-div");
const registerForm = document.querySelector("#register");
const registerName = document.querySelector("#register-username");
const registerPass = document.querySelector("#register-password");

let myUser;

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const res = await fetch("/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			loginName: loginName.value,
			loginPass: loginPass.value,
		}),
	});
	const data = await res.json();
	myUser = await getUser();
	console.log("login result", data);
});

registerForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const res = await fetch("/api/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			registerName: registerName.value,
			registerPass: registerPass.value,
		}),
	});
	const data = await res.json();

	loginDiv.style = "display: block;";
	registerDiv.style = "display: none;";
	logoutForm.style = "display: none;";
	// loginDiv.innerHTML = "";
	const h1 = document.createElement("h1");
	h1.innerHTML = `Thank you for registering!!`;
	document.body.append(h1);

	console.log("register result", data);
});

logoutForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const res = await fetch("/api/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			logout: true,
		}),
	});
	const data = await res.json();
	myUser = await getUser();
	console.log("logout result", data);
	location.reload("/");
});

const getUser = async () => {
	const res = await fetch("/api/user");
	const data = await res.json();
	console.log("user:", data);
	if (data.user !== undefined) {
		loginDiv.style = "display: none;";
		registerDiv.style = "display: none;";
		// loginDiv.innerHTML = "";
		const h1 = document.createElement("h1");
		h1.innerHTML = `Welcome ${data.user.user}!`;
		document.body.append(h1);
		logoutForm.style = "display: block;";
	} else {
		logoutForm.style = "display: none;";
	}
	return data;
};

getUser();
