// Function executes when Start Game button is clicked
function startGame() {
  var messageElement = document.getElementById("message");
  messageElement!.innerText = "Welcome! Starting a new game..";
}

document.getElementById("startGame")!.addEventListener("click", startGame);

var myString = "Hello World";
console.log(myString);

// Using let to declare a variable
let myString2 = "Hello World";
console.log(myString2);

// Using const to declare a variable
const myString3 = "Hello World";
console.log(myString3);
