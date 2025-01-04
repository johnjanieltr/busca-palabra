import printBoardContent from "./printBoardContent.js";
import validateKeyPressed from "./validateKeyPressed.js";

let currentRow = 0;
let currentItem = 0;
let gameIsRunnning = false;

const menuContainer = document.getElementById("menu-container");
const boardContainer = document.getElementById("board-container");

document.addEventListener("DOMContentLoaded", printBoardContent);

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-play")) {
    if (gameIsRunnning) return;

    document.getElementById("header").classList.remove("header--center");
    menuContainer.classList.add("opacity-0");
    boardContainer.classList.remove("d-none");

    setTimeout(() => boardContainer.classList.remove("opacity-0"), 0);
    setTimeout(() => {
      menuContainer.classList.add("d-none");
      gameIsRunnning = true;
    }, 500);
  }
});

document.addEventListener("keyup", (e) => {
  if (!gameIsRunnning) return;
  if (currentRow === 5) return;
  // detect if the key pressed is valid (returns if not valid)
  if (!validateKeyPressed(e.key)) return;

  const row = document.getElementById(`row-${currentRow}`);

  // delete the last letter pressed
  if (e.key === "Backspace") {
    if (currentItem === 0) return;
    row.children[currentItem - 1].textContent = "";
    currentItem--;
    return;
  }

  // full row
  if (currentItem === 4) {
    row.children[currentItem].textContent = e.key;
    currentRow++; // jump to next row
    currentItem = 0; // reset item identificator
    return;
  }

  row.children[currentItem].textContent = e.key;
  currentItem++;
});
