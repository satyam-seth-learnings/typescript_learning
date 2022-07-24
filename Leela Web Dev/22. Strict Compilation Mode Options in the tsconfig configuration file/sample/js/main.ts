const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("clicked");
}

button.addEventListener("click", clickHandler.bind(null, "You are Leela"));
