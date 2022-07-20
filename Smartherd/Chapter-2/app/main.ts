// Function executes when Start Game button is clicked
function startGame() {
  let playerName: string = "Annanya";

  let welcomeMessage = welcomePlayer(playerName);

  var messageElement = document.getElementById("message");
  messageElement!.innerText = welcomeMessage;
}

document.getElementById("startGame")!.addEventListener("click", startGame);

function welcomePlayer(name: string) {
  return `Hello ${name}! Let's start a new game...`;
}

let anyValue: any = 10;

let finalString = (<number>anyValue).toFixed(5);
let finalString2 = (anyValue as number).toFixed(5);
