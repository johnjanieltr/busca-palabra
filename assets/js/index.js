import printBoardContent from "./printBoardContent.js";
import randomWord from "./randomWord.js";
import showResult from "./showResult.js";
import validateKeyPressed from "./validateKeyPressed.js";

let currentRow = 0;
let currentItem = 0;
let currentWord = "";
let gameIsRunnning = false;

const menuContainer = document.getElementById("menu-container");
const boardContainer = document.getElementById("board-container");

document.addEventListener("DOMContentLoaded", printBoardContent);

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-play")) {
    if (gameIsRunnning) return;
    currentWord = randomWord(); // new random word

    document.getElementById("header").classList.remove("header--center");
    menuContainer.classList.add("opacity-0");
    boardContainer.classList.remove("d-none");

    setTimeout(() => boardContainer.classList.remove("opacity-0"), 0);
    setTimeout(() => {
      menuContainer.classList.add("d-none");
      gameIsRunnning = true;
    }, 500);
  }

  if (e.target.matches("#btn-play-again")) {
    location.reload();
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

    // last row
    if (currentRow === 4) {
      gameIsRunnning = false;
      showResult(false);
      return;
    }

    currentRow++; // jump to next row
    currentItem = 0; // reset item identificator
    verifyRow(row);
    return;
  }

  row.children[currentItem].textContent = e.key;
  currentItem++;
});

const verifyRow = (row) => {
  gameIsRunnning = false; // temporaly disabled can press key
  let currentWordArr = currentWord.split("");
  let currentChild = 0;
  let time = 0;
  let lettersCompleted = 0;

  currentWordArr.forEach((letter) => {
    setTimeout(() => {
      if (row.children[currentChild].textContent === letter) {
        row.children[currentChild].classList.add("bg-green");
        lettersCompleted++;
      } else if (currentWordArr.includes(row.children[currentChild].textContent)) {
        row.children[currentChild].classList.add("bg-yellow");
      } else {
        row.children[currentChild].classList.add("bg-gray");
      }
      currentChild++;
    }, time);

    time += 100;
  });

  // validate if the word is correct
  setTimeout(() => {
    if (lettersCompleted === 5) return showResult(true); //end of game, show result
    gameIsRunnning = true; // continue game
  }, 550);
};
