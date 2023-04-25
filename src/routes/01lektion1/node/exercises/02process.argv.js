const args = process.argv.splice(2);
if (args[0] === "greet") {
	console.log(`Hello ${args[1]}`);
} else if (args[0] === "farewell") {
	console.log(`Farewell ${args[1]}`);
} else {
	console.log('Either "greet" or "farewell"');
}


