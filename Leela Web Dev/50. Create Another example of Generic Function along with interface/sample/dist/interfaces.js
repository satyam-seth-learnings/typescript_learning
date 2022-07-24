"use strict";
var add;
add = function (x, y) {
    return x + y;
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.hello = function (phrase) {
        if (this.age) {
            console.log(phrase + this.name + " My age is " + this.age);
        }
        else {
            console.log(phrase + this.name);
        }
    };
    Person.prototype.greet = function () {
        console.log("hai greeting");
    };
    return Person;
}());
var leela = new Person("Leela");
var john = new Person("John", 20);
leela.hello("Hello");
john.hello("Hello");
