import game from "./game.js";
import printBoardContent from "./printBoardContent.js";
import startGame from "./startGame.js";

export let gameIsRunnning = false;
export const changeGameState = (bool) => gameIsRunnning = bool;

document.addEventListener("DOMContentLoaded", printBoardContent);

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-play")) return startGame();
  if (e.target.matches("#btn-play-again")) return location.reload();
});

document.addEventListener("keyup", game);
