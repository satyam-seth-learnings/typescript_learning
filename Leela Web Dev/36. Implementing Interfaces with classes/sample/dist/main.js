"use strict";
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.hello = function (phrase) {
        console.log(phrase + this.name);
    };
    Person.prototype.greet = function () {
        console.log("hai greeting");
    };
    return Person;
}());
var leela = new Person("Leela", 30);
var john = new Person("John", 20);
leela.hello("Hello");
leela.greet();
john.hello("Hello");
