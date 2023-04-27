const myElement = document.querySelector(".fancy");
let count = 0;

setInterval(() => {
	if (count % 2 === 0) {
		myElement.innerHTML = "This is javascript!";
	} else {
		myElement.innerHTML = "Hello!";
	}
	count++;
}, 1000);
