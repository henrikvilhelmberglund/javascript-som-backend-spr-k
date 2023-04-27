// import { handler } from "./build/handler.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(cors());

// ! this will not work when there is an index.html in the public folder
app.get("/", (req, res) => {
	// res.send("Starting page");
	res.json({ message: "Starting page" });
});

app.get("/hello", (req, res) => {
	// res.send("Hello world");
	res.json({ message: "Hello world" });
});

app.get("/echo", (req, res) => {
	// res.send("Hello world");
	res.json({ message: req.query.message });
});

app.post("/user", (req, res) => {
	// res.send("Hello world");
	// res.json(req.body);
	const { username, password } = req.body;
	res.redirect(`/form.html?username=${username}&password=${password}`);
});

app.post("/svelteuser", (req, res) => {
	// res.send("Hello world");
	// res.json(req.body);
	const { username, password } = req.body;
	res.json({ username, password });
});

// app.use(handler);

app.listen(port, () => console.log(`Started server on port ${port}`));
