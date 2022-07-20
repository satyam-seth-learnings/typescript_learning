/// <reference path="helper.ts" />

// Function executes when Start Game button is clicked
function startGame() {
  let playerName: string = Helper.getInputVal("playerName");
  displayScore(10, playerName);
  displayScore(-10, playerName);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

/**
 * Display score of the player
 * @param score
 * @param playerName
 * @return void
 */
function displayScore(score: number, playerName: string = "Math Player"): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  logger(`Score -> ${score}`);

  const scoreElement: HTMLElement | null =
    document.getElementById("playerScore");
  scoreElement!.innerText = `${playerName}, your score -> ${score}`;
}

let logMessage = (message: string) => console.log(message);
let logError = (message: string) => console.error(message);
