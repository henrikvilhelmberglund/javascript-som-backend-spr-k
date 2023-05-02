import { MongoClient, ObjectId } from "mongodb";
import express from "express";

const port = 3000;
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
// middleware för formulär
app.use(express.urlencoded());

// Skriv all annan kod här sen
app.listen(port, () => console.log(`Listening on ${port}`));

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
// const db = client.db("zoo");
// const animalCollection = db.collection("animals");
const db = client.db("library");
const booksCollection = db.collection("books");
// console.log(booksCollection)

app.get("/books", async (req, res) => {
	const books = await booksCollection.find({}).toArray();
	// res.json(books);
	res.render("books", { books });
});

app.get("/books/create", async (req, res) => {
	const books = await booksCollection.find({}).toArray();
	// res.json(books);
	res.render("create", { books });
});

app.post("/books/create", async (req, res) => {
	await booksCollection.insertOne(req.body);
	// res.json(books);
	res.redirect("/books");
});

app.get("/book/:id", async (req, res) => {
	const book = await booksCollection.findOne({
		_id: new ObjectId(req.params.id),
	});
	res.render("book", {
		title: book.title,
		author: book.author,
		year: book.year,
		description: book.description,
	});
});

// app.get("/animals/:animalType", async (req, res) => {
// const animal = await animalCollection.findOne({
// animal: animalType
// })
// });
