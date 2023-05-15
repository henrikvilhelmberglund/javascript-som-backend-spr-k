import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static("publiccookie"));

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
