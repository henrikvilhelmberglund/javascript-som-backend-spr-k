// blir som if ===
const alternative = "home";

// deklarera inte variabler inne
// kan anropa funktioner i case, blir mindre än ifelse om man har många cases

switch (alternative) {
	// kan ha flera på samma nivå som blir som "eller"
	case "home":
	case "atHome":
		console.log("we are home");
		// break viktigt för att inte fortsätta köra nästa case
		break;
	case "away":
		console.log("we are away");
		break;
	default:
		// console.log("error");
		throw new Error("illegal input");
}
