import prompt from "prompt";

prompt.start();
const question = "What is your name?";
const answer = await prompt.get(question);
console.log(`Name is: ${answer[question]}`);
prompt.stop();
