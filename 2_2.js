const readlineSync = require("readline-sync");

let minAge = parseInt(readlineSync.question('Entrez age min:'));
let maxAge = parseInt(readlineSync.question('Enter age max:'));

/*console.log(minAge);
console.log(maxAge);
console.log(currentAge);

if (currentAge>minAge){
	console.log('true1');
}

if (currentAge < maxAge){
	console.log('true2');
}
*/
if (minAge > maxAge){
	console.log('Go grab a freaking math schoolbook!');
	setTimeout(() => {  console.log('SORRY FOR BEING HARSH!!!')}, 3000);
	
} else{
		let currentAge = parseInt(readlineSync.question('Enter your current age:'));
		if ((currentAge > minAge)  &&  (currentAge < maxAge))
		{
			console.log('Your age (' + currentAge + ') is between max age (' + maxAge + ') and min age (' + minAge + ')');
		} else {
			console.log('Your age (' + currentAge + ') is !!!NOT!!! between max age (' + maxAge + ') and min age (' + minAge + ')');
		}
}