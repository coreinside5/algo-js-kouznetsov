const readlineSync = require("readline-sync");
class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}
console.log("¡Hola!");
console.log("Ejercicio 6.1");
