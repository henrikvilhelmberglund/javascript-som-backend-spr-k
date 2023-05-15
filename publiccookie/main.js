const loginForm = document.querySelector("#login");
const loginName = document.querySelector("#username");
const loginPass = document.querySelector("#password");

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const res = await fetch("/login", {
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
	console.log("login result", data);
});

const getUser = async () => {
	const res = await fetch("/user");
	const data = await res.json();
	console.log("user:", data);
};

getUser();
