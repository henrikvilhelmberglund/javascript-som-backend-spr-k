import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
// const db = client.db("zoo");
// const animalCollection = db.collection("animals");
const db = client.db("blog");
export const postsCollection = db.collection("posts");
