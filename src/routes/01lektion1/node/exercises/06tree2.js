import prompt from "prompt";

const tree = {
	yes: {
		question: "Do you want to eat a pizza?",
		yes: () => console.log("I recommend a kebab pizza!"),
		no: {
			question: "Are you sleepy?",
			yes: () => console.log("I recommend taking a nap!"),
			no: () => console.log("Nice! Ready to write some code!"),
		},
	},
	no: {
		question: "Are you sleepy?",
		yes: () => console.log("I recommend taking a nap!"),
		no: () => console.log("Nice! Ready to write some code!"),
	},
};

async function askQuestion(question) {
	const answer = await prompt.get(question);
	return answer[question];
}

async function traverseTree(node) {
	if (typeof node === "function") {
		node();
	} else {
		const answer = await askQuestion(node.question);
		traverseTree(node[answer.toLowerCase()]);
	}
}

prompt.start();

traverseTree(tree);

// ! doesn't work t_t
