const readlineSync = require("readline-sync");
let secret = 100;
let  name = "Gerard";
let firstName = "Lambert";
let city = "Paris";

console.log("***Ex 1.0*******************************************************************************");
console.log("5+20=" + (5+20));
console.log("5*20=" + (5*20));
console.log("5-20=" + (5-20));
console.log("5/20=" + (5/20));
console.log("11%3=" + (11%3));
console.log("***Ex 1.1*******************************************************************************");
console.log("Hey, stop reading my secret number " + secret);
console.log("***Ex 1.2*******************************************************************************");
console.log("Your name is " + name +" "+ firstName +" and you live in " + city +".");
console.log("***Ex 1.4*******************************************************************************");
let userName = readlineSync.question('Enter your name:');
let userSurname = readlineSync.question('Enter your surname:');
let userCity = readlineSync.question('In which citeh do you live?');
console.log("Your name is " + userName +" "+ userSurname +" and you live in " + userCity +".");
console.log("***Ex 1.5*******************************************************************************");
let number01 =readlineSync.question("Enter a first number with decimal part :");
//parse int
let number02 =readlineSync.question("Enter a second number with decimal part :");
//parse float
//const multiply = (a,b) => a*b;
//function multiply (a,b){
//return a*b;
//}
console.log(Math.trunc(number01)+" * " +number02 + " = " + (Math.trunc(number01)*number02));
// pqarse int take int, so no neet trunk, float take float
console.log("***Ex 1.6*******************************************************************************");
let intnumber01 =readlineSync.question("Enter a first int number:");
let intnumber02 =readlineSync.question("Enter a second int number:");
console.log(intnumber01+" % " +intnumber02+ " = " + (intnumber01 % intnumber02));
//use parsint on variables