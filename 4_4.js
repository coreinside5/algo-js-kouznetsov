const readlineSync = require("readline-sync");
let arrayX = [];
let arrLngt;
/*function average takes an array as argument and returns 
the average value of all elements*/
function average (arr)
{
	/* !!! array should exist !!! */
	let sum = 0;
	for (let i = 0; i < arr.length; i += 1) {
		sum += parseInt(arr[i]) ;
	}
	return sum/arr.length;
}
/*function min takes an array as argument and return the smalles element value*/
function min (arr){
	let slidElt = arr[0]
	for ( let i=1; i<=arr.length;++i){
		if (slidElt>arr[i]){
			slidElt=arr[i];
		}
	}
	return slidElt;
}
/*function max takes an array as argument and return the biggest element value*/
function max (arr){
	let slidElt = arr[0]
	for ( let i=1; i<=arr.length;++i){
		if (slidElt<arr[i]){
			slidElt=arr[i];
		}
	}
	return slidElt;
}
/*function multiRand take ar argument as array name, and n for number of elemrnts. 
Then it creates an array witn n random numbers*/
function multiRand(ar ,n)
{
	for ( let count = 0; count < n; count += 1) {
		ar[count] = Math.floor(Math.random() * 10) + 1;
	}
	return ar;
}


console.clear();
console.log("Hello!");
console.log("Ejercicio 4.4");
arrLngt =parseInt(readlineSync.question("Enter the number of elements for the array you want to create :"));
multiRand(arrayX,arrLngt);
console.log(arrayX);
console.log("The average of the array is			:" + average(arrayX));
console.log("The biggest number in array is 	:" + max(arrayX));
console.log("The smallest number in array is	:" + min(arrayX));


