import express from "express";

const app = express();
const port = 3002;

app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.get("/goodbye", (req, res) => {
	res.send("Goodbye!");
});

app.get("/json", (req, res) => {
	res.json({ type: "json", message: "this is JSON! wow!", obj: { id: 73 } });
});

app.get("/query", (req, res) => {
	const didIGetAMessage = req.query.message ? "yes" : "no";
	res.json({
		route: "query",
		message: req.query.message,
		didIGetAMessage,
	});
});

app.post("/message", (req, res) => {
	res.json(req.body);
});

app.listen(port, () => {
	console.log(`started Express server on port ${port}`);
});
