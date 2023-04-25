import readline from "readline";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Vad heter du?", (name) => {
	console.log(`Hej ${name}!`);
	rl.close();
});
