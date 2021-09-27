const readlineSync = require("readline-sync");
/* Function rand10 generates a random number from 1 to 10. It uses Math.random, it generates an integer
from 0 to 1, then multiplies by 10 to have the number greater than 1, than takes the int part.*/
function rand10 (){
	return Math.floor(Math.random() * 10) + 1;
};


console.clear();
console.log("Hello!");
console.log("Ejercicio 4.2");
console.log(rand10());

