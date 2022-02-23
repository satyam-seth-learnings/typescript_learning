const button = document.querySelector("button");

// Example-1
// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });

// Example-2
function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

// a comment
if (button) {
}
button.addEventListener("click", clickHandler.bind(null));

const map = new Map();
