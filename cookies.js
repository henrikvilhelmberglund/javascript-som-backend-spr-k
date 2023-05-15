import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const port = 3000;
// tydligare vad man menar, 5 sek * 60 sekunder på minut * 1000 millisekunder
const FIVE_MINUTES = 5 * 60 * 1000;

app.use(cookieParser());
app.use(express.static("publiccookie"));
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: "shhh very secret",
		cookie: {
			maxAge: FIVE_MINUTES,
		},
	})
);

app.get("/api/cookie", (req, res) => {
	console.log(req.cookies);
	res.send("thanks!");
});

app.listen(port);

const createCookie = () => {
	document.cookie = "name=Henrik";
	document.cookie = "profession=Frontend Developer";
	console.log(document.cookie);
};
