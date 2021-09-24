const readlineSync = require("readline-sync");


let magicNumber =parseInt(readlineSync.question('Enter your favorite number :'));
//console.log('Your number is :' + magicNumber);
//console.log(magicNumber != 42);
while (magicNumber != 42) {
	console.log('Are you sure?');
	magicNumber =parseInt(readlineSync.question('Enter your favorite number :'));
	//console.log('Your number is :' + magicNumber);
	//console.log(magicNumber != 42);
}
console.log("You've finally found the right number :" + magicNumber);


