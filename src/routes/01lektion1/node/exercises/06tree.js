import prompt from "prompt";

prompt.start();
let question = "Are you hungry?";
let answer = await prompt.get(question);
if (answer[question] === "yes") {
	question = "Do you want to eat a pizza?";
	answer = await prompt.get(question);

	if (answer[question] === "yes") {
		console.log("I recommend a kebab pizza!");
	} else if (answer[question] === "no") {
		console.log("Maybe you could try some ramen instead!");
	}
} else if (answer[question] === "no") {
	question = "Are you sleepy?";
	answer = await prompt.get(question);
	if (answer[question] === "yes") {
		console.log("I recommend taking a nap!");
	} else if (answer[question] === "no") {
		console.log("Nice! Ready to write some code!");
	}
}

prompt.stop();
