import db from "$lib/mongo";

export const books = db.collection("books");
