"use strict";
// let userInput;
let userInput;
// let userInput: any;
let userName;
// userName = 5;
userInput = 5;
userInput = "Leela";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, code };
}
function generate() {
    console.log("hello");
}
console.log(generate());
let result = generateError("Invalid Page", 500);
console.log("Hello");
