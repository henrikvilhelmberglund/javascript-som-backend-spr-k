import prompt from "prompt";

prompt.start();
const question = "Vad heter du?";
const answer = await prompt.get(question);
console.log(`Hej ${answer[question]}!`);
prompt.stop();
