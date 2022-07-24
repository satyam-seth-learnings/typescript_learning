"use strict";
var add;
add = (x, y) => {
    return x + y;
};
class PersonOld {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello(phrase) {
        if (this.age) {
            console.log(phrase + this.name + " My age is " + this.age);
        }
        else {
            console.log(phrase + this.name);
        }
    }
    greet() {
        console.log("hai greeting");
    }
}
let leela = new PersonOld("Leela");
let john = new PersonOld("John", 20);
leela.hello("Hello");
john.hello("Hello");
