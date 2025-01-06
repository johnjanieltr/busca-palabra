import { changeGameState, gameIsRunnning } from "./index.js";
import randomWord from "./randomWord.js";
import showResult from "./showResult.js";
import validateKeyPressed from "./validateKeyPressed.js";
import validateRow from "./validateRow.js";

let currentRow = 0;
let currentItem = 0;

export let currentWord = "";

const game = (e) => {
  // if the word is not established, it establishes it
  if (!currentWord) currentWord = randomWord();
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
      changeGameState(false);
      showResult(false);
      return;
    }

    currentRow++; // jump to next row
    currentItem = 0; // reset item identificator
    validateRow(row);
    return;
  }

  row.children[currentItem].textContent = e.key;
  row.children[currentItem].classList.add("bounce");
  // remove bounce animation from the item after it plays
  setTimeout(() => row.children[currentItem - 1]?.classList.remove("bounce"), 250);
  currentItem++;

};

export default game;
