const readlineSync = require("readline-sync");

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
}
let cat1 = new Cat ("Skitty",9);
let cat2 = new Cat ("Pixel", 6);
console.log("First cat's name is " + cat1.name + ", and it have " + cat1.age + " years.");
console.log("Second cat's name is " + cat2.name + ", and it have " + cat2.age + " years.");
//console.log(cat1);
//console.log(cat2);