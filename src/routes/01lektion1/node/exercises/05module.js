import prompt from "prompt";

export const question = "What is your name?";
export async function outputAnswer(question) {
	prompt.start();
	const answer = await prompt.get(question);
	console.log(`Name is: ${answer[question]}`);
	prompt.stop();
}
