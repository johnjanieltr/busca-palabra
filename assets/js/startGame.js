// this function hidden menu, transform the header state and change to true game state

import { changeGameState, gameIsRunnning } from "./index.js";

const menuContainer = document.getElementById("menu-container");
const boardContainer = document.getElementById("board-container");

const startGame = () => {
  if (gameIsRunnning) return;

  document.getElementById("header").classList.remove("header--center");
  menuContainer.classList.add("opacity-0");
  boardContainer.classList.remove("d-none");

  setTimeout(() => boardContainer.classList.remove("opacity-0"), 0);
  setTimeout(() => {
    menuContainer.classList.add("d-none");
    changeGameState("true"); // start game
  }, 500);
};

export default startGame;
