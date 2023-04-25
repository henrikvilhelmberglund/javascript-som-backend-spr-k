import readline from "readline";

const question = "What is your name?";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question(question, (name) => {
	console.log(`Name is: ${name}`);
	rl.close();
});
