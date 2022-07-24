"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log("Logger Factory");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function Component(template, hookId) {
    console.log("Component Factory");
    return function (constructor) {
        console.log("Template Component");
        const hookEl = document.getElementById(hookId);
        const data = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = data.name;
        }
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = "Leela";
        console.log("creating object...");
    }
};
Person = __decorate([
    Logger("Logging into Logger"),
    Component("<h1>Hai</h1>", "app")
], Person);
function Log(target, propertyName) {
    console.log(target);
    console.log(propertyName);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Price should be positive number");
        }
    }
    getPriceWithTax(tax) {
        return this._price * tax;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
const product = new Product("New Product", 12);
console.log(product);
