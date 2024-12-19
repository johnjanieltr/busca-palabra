import words from "./words.js";

let wordLengthMode = 5;
let currentRow = -1;
let currentItem = 0;
let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]$/;

// EVENTS
document.addEventListener("DOMContentLoaded", () => {
  printRow();
});

document.addEventListener("keyup", (e) => {
  // detect if the key pressed is valid (returns if not valid)
  if (e.key != "Backspace") {
    if (!regExp.test(e.key)) {
      return;
    }
  }

  const row = document.getElementById(`row-${currentRow}`);

  // delete the last letter pressed
  if (e.key === "Backspace"){
    row.children[currentItem - 1].textContent = "";
    currentItem--;
    return;
  }

  // full row (print a new row)
  if (currentItem === wordLengthMode - 1) {
    row.children[currentItem].textContent = e.key;
    printRow();
    return;
  }

  row.children[currentItem].textContent = e.key;
  currentItem++;
});

// FUNCTIONS
const randomWord = () => {
  let randomNumber = Math.round(Math.random() * words.length);
  if (!randomNumber) console.log("Ah ocurrido un error");
  return words[randomNumber];
};

const printRow = () => {
  if (currentRow >= 5) return console.log("Game end");

  currentItem = 0;
  currentRow++;

  const $board = document.getElementById("board");
  const container = document.createElement("div");
  container.classList.add("row", "gap-2");
  container.id = `row-${currentRow}`;

  for (let i = 0; i < wordLengthMode; i++) {
    container.insertAdjacentHTML("beforeend",
      "<div class='d-flex justify-content-center align-items-center item'></div>"
    );
  };
  
  $board.insertAdjacentElement("beforeend", container);
};
