const readlineSync = require("readline-sync");
/*unction factorial(a)
{
		let product = a;
		console.log("a" + a);
		console.log("1" + product);		
		if (a > 0) 
		{
			a = a - 1;
			product = product * a;
			factorial(a);
			console.log("a" + a);
			console.log("2" + product);
		}
		else
		{
			return product;	
		}
		
}*/
/*function fact(a)
{
	//console.log(a);	
	let prod = a;
	//console.log(prod);
	for (let i = (a-1);i>0; --i)
	{
		console.log(prod);
		prod = prod * i;
	} 
	return prod;
}*/

function factorial (a)
{
	if (a == 0)
		return 1;
	return a * factorial (a-1);
}
let numb;

console.clear();
console.log("Hello!");
console.log("Ejercicio 4.6");
numb = parseInt(readlineSync.question("Entrez un hombre :"));
console.log("Factorielle de " + numb + " est " + factorial(numb));
