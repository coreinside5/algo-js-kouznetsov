const readlineSync = require("readline-sync");
let countN;
let sumN = 0;
let numN;

console.clear();
console.log("Hello!");
numN = readlineSync.question("Enter a number N : (It has better not be too big)	:");
console.log("Your number N is" + numN);
for (countN=parseInt(numN);countN >0;countN-=1){
	sumN += parseInt(readlineSync.question(console.log("Enter a random number	:")));
	//console.log("Your Sum is" + sumN);
}
console.log("Your Sum is	:" + sumN);
