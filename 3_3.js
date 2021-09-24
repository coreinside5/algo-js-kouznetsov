const readlineSync = require("readline-sync");
let arrA = [ 1, 4, 2, 8, 3, 16];
let arrB = [];
let output = "";
let count = 0;


console.clear();
console.log("Hello!");
console.log("Here is array A");
for ( count = 0; count < arrA.length; count += 1) {
	output += (arrA[count] + " ");
}
console.log(output);
output = "";
console.log(output);
console.log("Here is array B unpopulated");
for ( count = 0; count < arrB.length; count += 1) {
	output += (arrB[count] + " ");
}
console.log(output);

console.log("Here is array B populated");
/*for ( count = 0; count < arrA.length; count += 1) {
	arrB[count] = arrA[count];
}*/
/*for ( count = 0; count < arrA.length; count += 1) {
	arrB.push(arrA[count]);
}*/
arrB = arrA.slice();
for ( count = 0; count < arrB.length; count += 1) {
	output += (arrB[count] + " ");
}
console.log(output);