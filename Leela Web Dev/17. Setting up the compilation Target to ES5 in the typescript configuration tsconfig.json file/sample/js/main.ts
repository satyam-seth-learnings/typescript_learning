// let userInput;
let userInput: unknown;
// let userInput: any;
let userName: string;
// userName = 5;

userInput = 5;
userInput = "Leela";

// userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
}

function generate(): void {
  console.log("hello");
}

console.log(generate());

let result = generateError("Invalid Page", 500);
console.log("Hello");
