let appId = "abc";

const button = document.querySelector("button");

function add(n1: number, n2: number) {
  // Not all code paths return a value
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function clickHandler(message: string, age: number) {
  // 'age' is declared but its value is never read
  // let userName = "Max"; // 'userName' is declared but its value is never read
  console.log("Clicked! " + message);
}

// a comment
if (button) {
}
button.addEventListener(
  "click",
  clickHandler.bind(null, "You're welcome!", 30)
);

const map = new Map();
