const readlineSync = require("readline-sync");
/* Function rand10 generates a random number from 1 to 10. It uses Math.random */
function rand10 (){
	return Math.floor(Math.random() * 10) + 1;
};


console.clear();
console.log("Hello!");
console.log("Ejercicio 4.2");
console.log(rand10());

