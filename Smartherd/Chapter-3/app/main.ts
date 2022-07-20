// Function executes when Start Game button is clicked
function startGame() {
  let playerName: string | undefined = getInputVal("playerName");
  displayScore(10, playerName);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

/**
 * Fetch input data
 * @param elementID
 * @return input element
 */
function getInputVal(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

/**
 * Display score of the player
 * @param score
 * @param playerName
 * @return void
 */
function displayScore(score: number, playerName: string = "Math Player"): void {
  const scoreElement: HTMLElement | null =
    document.getElementById("playerScore");
  scoreElement!.innerText = `${playerName}, your score -> ${score}`;
}
