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
        console.log(phrase + this.name);
    };
    Person.prototype.greet = function () {
        console.log("hai greeting");
    };
    return Person;
}());
var leela = new Person("Leela", 30);
var john = new Person("John", 20);
leela.greet();
leela.hello("Hello");
john.hello("Hello");
