import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { MongoClient } from "mongodb";

const app = express();
const port = 3000;
// tydligare vad man menar, 5 sek * 60 sekunder på minut * 1000 millisekunder
const FIVE_MINUTES = 5 * 60 * 1000;

const client = new MongoClient("mongodb://127.0.0.1:27017");
// i produktionskod, lägg in i try
await client.connect();

const db = client.db("loginproject");
const userCollection = db.collection("users");

app.use(cookieParser());
app.use(express.static("publiccookie"));
app.use(express.json());
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: "shhh very secret",
	})
);

app.post("/login", async (req, res) => {
	console.log(req.body);
	const user = await userCollection.findOne({
		user: req.body.loginName,
		pass: req.body.loginPass,
	});
	if (user) {
		req.session.user = user;
		res.json({
			user: user.user,
		});
	} else {
		res.status(401).send("Unauthorized");
	}
});

app.get("/user", (req, res) => {
	res.json({ user: req.session.user });
});

app.get("/api/cookie", (req, res) => {
	console.log(req.cookies);
	console.log(req.session);
	res.send("thanks!");
});

app.listen(port);

const createCookie = () => {
	document.cookie = "name=Henrik";
	document.cookie = "profession=Frontend Developer";
	console.log(document.cookie);
};
