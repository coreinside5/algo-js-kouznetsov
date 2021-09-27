const readlineSync = require("readline-sync");
/* Function rand10 generates a random number from 1 to 10. It uses Math.random, it generates an integer
from 0 to 1, then multiplies by 10 to have the number greater than 1, than takes the int part.*/
function rand10 ()
{
	return Math.floor(Math.random() * 10) + 1;
};
/*fonction multirand populates the given array with random number. 
parameters : ar - name of given Array, n - number of elements (!!!), nb - function name */

function multiRand(ar ,n , nb)
{
	for ( let count = 0; count < n; count += 1) {
		ar[count] = nb();
	}
}
/*function that shows array on same line and make it prettier, careful the array has to be bopulated
otherwise it will show nothing (no length for array)*/
function showArr (arrNam)
{
	let string = "| ";
	for (let i = 0; i < arrNam.length; i += 1) {
		string += (arrNam[i] + " | ");
	}
	return string;
}
let arRand = [];




console.clear();
console.log("Hello!");
console.log("Ejercicio 4.3");
//appel multiRand
multiRand(arRand, 15, rand10);
//appel showArr
console.log(showArr(arRand));



