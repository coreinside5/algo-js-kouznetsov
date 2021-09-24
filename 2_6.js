const readlineSync = require("readline-sync");

console.clear();
console.log("Hello!");
let numChoice = readlineSync.question("Enter a number from 1 to 7 :");
console.log("Your choice is :" + numChoice);
while (numChoice != 'q'){
	console.clear();
	switch (numChoice) {
	case '1':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Monday");
		break;
	case '2':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Tuesday");
		break;
	case '3':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Wednesday");
		break;
	case '4':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Thursday");
		break;
	case '5':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Friday");
		break;
	case '6':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Saturday");
		break;
	case '7':
		console.log("Your choice is :" + numChoice + " and the corresponding day is Sunday");
		break;
	default:
		console.log("Reenter please!");
	}
	numChoice = readlineSync.question("Enter a number from 1 to 7 :");
	console.log("Your choice is :" + numChoice);
}
console.log("You've chosen to quit. Bye");

