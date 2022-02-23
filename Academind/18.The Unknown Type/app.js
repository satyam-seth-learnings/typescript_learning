// Example-1
// let userInput: any;
// let userName: string;
// userInput = 5;
// userInput = "Max";
// userName = userInput;
// Example-2
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // Type 'unknown' is not assignable to type 'string'
if (typeof userInput === "string") {
    userName = userInput;
}
