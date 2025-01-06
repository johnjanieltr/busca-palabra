import { currentWord } from "./game.js";
import { changeGameState } from "./index.js";
import showResult from "./showResult.js";

const validateRow = (row) => {
  changeGameState(false); // temporarily disable pressing any key
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
    // the word is correct, end of game show result
    if (lettersCompleted === 5) return showResult(true);
    // the word isn't correct, continue game
    changeGameState(true);
  }, 550);
};

export default validateRow;
