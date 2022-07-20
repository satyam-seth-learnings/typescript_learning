// Function executes when Start Game button is clicked
function startGame() {
  let playerName: string = "Annanya";

  let welcomeMessage = welcomePlayer(playerName);

  var messageElement = document.getElementById("message");
  messageElement!.innerText = welcomeMessage;
}

document.getElementById("startGame")!.addEventListener("click", startGame);

function welcomePlayer(name: string): string {
  return `Hello ${name}! Let's start a new game...`;
}