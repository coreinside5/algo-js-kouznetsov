const readlineSync = require("readline-sync");
const arrA = [ 1, 5, 10, 15, 25, 100];
const arrB = [90,5,23,45,600,3,2,7]
let output = "";
let slidElt = 0;

console.clear();
console.log("Hello!");
function findmax (arNam,arCnt){
	slidElt = arNam[0]
	for ( let i=1; i<=arCnt;++i){
		if (slidElt<arNam[i]){
			slidElt=arNam[i];
		}
	}
	return slidElt;
}
function findmin (arNam,arCnt){
	slidElt = arNam[0]
	for ( let i=1; i<=arCnt;++i){
		if (slidElt>arNam[i]){
			slidElt=arNam[i];
		}
	}
	return slidElt;
}
console.log("Here is the max value of array A :" + findmax(arrA,arrA.length));
console.log("Here is the min value of array A :" + findmin(arrA,arrA.length));
console.log("Here is the max value of array B :" + findmax(arrB,arrB.length));
console.log("Here is the min value of array B :" + findmin(arrB,arrB.length));

console.log(findmax(arrB,arrB.length));
console.log(findmin(arrB,arrB.length));
// console log with "" is a string, without is an int
//console.log(Math.min(...arr1));