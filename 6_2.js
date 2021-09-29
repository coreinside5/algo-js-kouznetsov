const readlineSync = require("readline-sync");

//console.clear();
console.log("¡Hola!");
console.log("Ejercicio 6.1");
class Person {
    constructor(firstname,lastname)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello()
    {
        console.log("Hello " + this.firstname + " " + this.lastname);
    }
}
let person1 = new Person ("Ginger", "ale");
person1.sayHello();