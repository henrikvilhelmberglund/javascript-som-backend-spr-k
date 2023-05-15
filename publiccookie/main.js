const main = () => {
	document.cookie = "kurs=FEND22";
};

const call = async () => {
	await fetch("/api/cookie");
};

main();

call();
