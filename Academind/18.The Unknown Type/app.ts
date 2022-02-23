// Example-1
// let userInput: any;
// let userName: string;

// userInput = 5;
// userInput = "Max";
// userName = userInput;

// Example-2
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // Type 'unknown' is not assignable to type 'string'
if (typeof userInput === "string") {
  userName = userInput;
}
