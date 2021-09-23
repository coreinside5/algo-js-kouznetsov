const readlineSync = require("readline-sync");

let userAge = readlineSync.question('Enter your age :');
if (userAge >= 18){
	console.log("You are an adult");
}
else{
	console.log("You are not yet an adult");
}
	
let minAge = readlineSync.question('Entrez age min:');
let maxAge = readlineSync.question('Enter age max:');
let currentAge = readlineSync.question('Enter your current age');
if ((currentAge >= minAge) && (currentAge <= maxAge)){
	console.log('Your age (' + currentAge + ') is between max age (' + maxAge + ') and min age (' + minAge + ')');
} else {
	console.log('else');
}