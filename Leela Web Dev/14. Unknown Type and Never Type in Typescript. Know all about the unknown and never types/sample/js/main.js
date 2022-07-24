// let userInput;
var userInput;
// let userInput: any;
var userName;
userInput = 5;
userInput = "Leela";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
function generate() {
    console.log("hello");
}
console.log(generate());
var result = generateError("Invalid Page", 500);
console.log(result);
