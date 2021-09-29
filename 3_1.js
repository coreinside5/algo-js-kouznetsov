const readlineSync = require("readline-sync");
let arrA = [ 1, 2 ,3 ,4 ,5 ];
let arrB = [ 100, 101, 102 ];
let sumA = 0;
let sumB = 0;
let count = 0;

console.clear();
console.log("Hello!");
console.log("Array A");
for ( count = 0; count < arrA.length; count += 1) {
	console.log("Element " + count +" of array A is "+ arrA[count]);
	sumA += arrA[count];
	console.log("Sum of " + count + " first elements of array A is " + sumA);
}
console.log("Array B");
for (let elem of arrB){
	//console.log("Element " + elem +" of array A is "+ arrB[elem]);
	sumB += elem;
	console.log("Sum is " + sumB);
}
//foreach() pour array
//arr.forEach ()







