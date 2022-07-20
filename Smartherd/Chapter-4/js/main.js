/// <reference path="helper.ts" />
// Function executes when Start Game button is clicked
function startGame() {
    var playerName = Helper.getInputVal("playerName");
    displayScore(10, playerName);
    displayScore(-10, playerName);
}
document.getElementById("startGame").addEventListener("click", startGame);
/**
 * Display score of the player
 * @param score
 * @param playerName
 * @return void
 */
function displayScore(score, playerName) {
    if (playerName === void 0) { playerName = "Math Player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    logger("Score -> ".concat(score));
    var scoreElement = document.getElementById("playerScore");
    scoreElement.innerText = "".concat(playerName, ", your score -> ").concat(score);
}
var logMessage = function (message) { return console.log(message); };
var logError = function (message) { return console.error(message); };
