import { MongoClient } from "mongodb";
import express from 'express';

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
// const db = client.db("zoo");
// const animalCollection = db.collection("animals");

const port = 3000;
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
// Skriv all annan kod här sen
app.listen(port, () => console.log(`Listening on ${port}`));

// const app = express();
// app.get("animals/:animalType", async (req, res) => {
// const animal = await animalCollection.findOne({
// animal: animalType
// })
// });
