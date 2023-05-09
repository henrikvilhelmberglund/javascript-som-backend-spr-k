import { MongoClient, ObjectId } from "mongodb";
import express from "express";

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.static("publicrest"));

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
// const db = client.db("zoo");
// const animalCollection = db.collection("animals");
const db = client.db("blog");
const postsCollection = db.collection("posts");

app.get("/api/posts/:id", async (req, res) => {
	const offsetNumber = +req.params.id - 1;
	const result = await postsCollection
		.find({})
		.skip(offsetNumber)
		.sort({ _id: 1 })
		.limit(1)
		.toArray();
	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	console.log(result);
	res.json({
		result: result[0],
	});
});

app.delete("/api/posts/:id", async (req, res) => {
	const offsetNumber = +req.params.id - 1;
	const foundPost = await postsCollection
		.find({})
		.skip(offsetNumber)
		.sort({ _id: 1 })
		.limit(1)
		.toArray();

	const result = await postsCollection.deleteOne(foundPost[0]);
	// const result = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	console.log(result);
	res.json({
		result: result[0],
	});
});

app.get("/api/posts", async (req, res) => {
	let result;
	// if (req.query.limit) {
	if (req.query.latest) {
		result = await postsCollection
			.find({})
			.sort({ _id: -1 })
			.limit(parseInt(req.query.limit, 10))
			.toArray();
	} else {
		result = await postsCollection.find({}).limit(parseInt(req.query.limit, 10)).toArray();
	}
	// } else {
	// result = await postsCollection.find({}).toArray();
	// }
	res.json({
		result,
	});
});

app.post("/api/posts", async (req, res) => {
	const result = await postsCollection.insertOne(req.body);
	res.json({
		result,
	});
});

app.put("/api/posts/:id", async (req, res) => {
	const post = await postsCollection.findOne({ _id: new ObjectId(req.params.id) });
	const result = await postsCollection.updateOne(post, { $set: req.body });
	res.json({
		result,
	});
});

// app.get("/api/hello", (req, res) => {
// 	res.json({
// 		hello: "world",
// 	});
// });

app.listen(port, () => console.log("REST Api started!"));
