import express from "express";
// import ejs from "ejs";

const app = express();
const port = 3000;

// ! if no parantheses - nothing happens
app.use(express.urlencoded());
app.use(express.static("templatepublic"));

app.set("views", "./views");

app.set("view engine", "ejs");

const users = [
	{ id: 1, name: "Peter", email: "peter@mail.com" },
	{ id: 2, name: "Mary", email: "mary@mail.com" },
	{ id: 3, name: "Jane", email: "jane@mail.com" },
];

app.get("/", (req, res) => {
	res.render("index", {
		title: "User list",
		message: "This is a list of users",
		users,
	});
	// res.send("hello");
});

app.get("/user/:userid", (req, res) => {
	const uid = parseInt(req.params.userid, 10);
	const user = users.find((user) => user.id === uid);

	if (!user) {
		res.status(404).send("User not found");
	}
	res.render("user", {
		title: "User page",
		message: "This is a page for a single user",
		user,
	});
});

app.get("/:input", (req, res) => {
	res.render(
		req.params.input,
		{
			title: `${req.params.input} page`,
		},
		(err, html) => {
			if (err) {
				res.status(404).render("404", {
					title: `404: page not found`,
				});
			}
			res.send(html);
		}
	);
});

app.listen(port, () => console.log(`Started templates server on port ${port}`));
