const readlineSync = require("readline-sync");
let lgtSurf = 0;
let wdtSurf = 0;
// Function calcSurf takes 2 values lgt for length, and wdt for width, and 
//returns the product of these 2 values - surface.
function calcSurface(lgt,wdt){
	return lgt * wdt;
}

console.clear();
console.log("Hello!");
lgtSurf = parseInt(readlineSync.question("Enter the length of the rectangle	:"));
wdtSurf = parseInt(readlineSync.question("Enter the width of the rectangle	:"));

console.log("The surface of the rectangle with length	:" + lgtSurf + " and width	:" + wdtSurf + " is	:" + calcSurface(lgtSurf,wdtSurf));
// correction
/*

*/