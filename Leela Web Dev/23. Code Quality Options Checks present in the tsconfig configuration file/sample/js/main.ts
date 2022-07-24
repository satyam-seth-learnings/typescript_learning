const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("clicked");
}

function add(n1: number, n2: number) {
  if (n1 + n2) {
    return n1 + n2;
  }
  return;
}

button.addEventListener("click", clickHandler.bind(null, "You are Leela"));
