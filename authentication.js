import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

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

// ? 1.
// app.post("/login", async (req, res) => {
// 	console.log(req.body);
// 	if (req.body.loginName === "admin" && req.body.loginPass === "12345") {
// 		req.session.user = "admin";
// 		res.json({ user: "admin" });
// 	} else {
// 		res.status(401).send("Unauthorized");
// 	}
// });

// ? 2
// app.post("/api/login", async (req, res) => {
// 	console.log(req.body);
// 	if (req.body.loginName === "admin" && req.body.loginPass === "12345") {
// 		req.session.user = "admin";
// 		res.json({ user: "admin" });
// 	} else {
// 		res.status(401).json({ error: "Unauthorized" });
// 	}
// });

function needsAuthentication(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		res.status(401).json({ error: "Unauthorized" });
	}
}

// ? 3
app.post("/api/login", async (req, res) => {
	let matches = false;
	console.log(req.body);
	const user = await userCollection.findOne({
		user: req.body.loginName,
	});
	const pass = user.pass;
	bcrypt.compare(req.body.loginPass, pass, function (err, result) {
		// result == true
		console.log(result);
		if (result) {
			matches = true;
			if (matches) {
				req.session.user = user;
				res.json({
					user: user.user,
				});
			}
		} else {
			res.status(401).json({ error: "Unauthorized" });
		}
	});
});

app.get("/api/secretroute", needsAuthentication, (req, res) => {
	res.json({ result: "Nice! You can see this secret info! 42" });
});

app.post("/api/register", async (req, res) => {
	bcrypt.hash(req.body.registerPass, 10, async function (err, hash) {
		// Store hash in your password DB.
		const user = await userCollection.insertOne({
			user: req.body.registerName,
			pass: hash,
		});
		res.json({
			user: user.user,
		});
	});
});

app.get("/api/user", (req, res) => {
	console.log(req.session.user);
	res.json({ user: req.session.user });
});

app.post("/api/logout", (req, res) => {
	req.session.destroy(() => {
		res.json({ loggedIn: false });
	});
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
