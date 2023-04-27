import express from "express";
// import ejs from "ejs";

const app = express();
const port = 3000;

// ! if no parantheses - nothing happens
app.use(express.urlencoded());

app.set("views", "./views");

app.set("view engine", "ejs");

const users = [
	{ name: "Kalle", id: 1 },
	{ name: "Lisa", id: 2 },
];

app.get("/", (req, res) => {
	// res.render("index", {
	// 	title: "User list",
	// 	message: "This is a list of users",
	// 	users: [
	// 		{ name: "Kalle", id: 1 },
	// 		{ name: "Lisa", id: 2 },
	// 	],
	// });
	res.send("hello");
});

app.get("/user/:userid", (req, res) => {
	const uid = parseInt(req.params.userid, 10);
	const user = users.find((user) => user.id === uid);

	if (!user) {
		res.status(404).send("User not found");
	}
	res.send(user.name);
});

app.listen(port, () => console.log(`Started templates server on port ${port}`));
