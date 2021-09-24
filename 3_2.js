const readlineSync = require("readline-sync");
let arrA = [ 1, 2 ,3 ,4 ,5 ];
let arrB = [ 100, 101, 102 ];
let sumX = 0;
let count = 0;

console.clear();
console.log("Hello!");
console.log("Array A");
for ( count = 0; count < arrA.length; count += 1) {
	sumX+= arrA[count];
	
}
console.log("Sum arr A is " + sumX);
console.log("Average value of array A is	:" + sumX + "/" + arrA.length + "=" + (sumX/arrA.length));


console.log("Array B");
sumX = 0;
for (let elem of arrB){
	sumX += elem;
}
console.log("Sum arr B is " + sumX);
console.log("Average value of array B is	:" + sumX + "/" + arrB.length + "=" + (sumX/arrB.length));



