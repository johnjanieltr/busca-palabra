import words from "./words.js";

let wordLengthMode = 5;
let currentRow = 0;
let currentItem = 0;

document.addEventListener("DOMContentLoaded", () => {
  printRow();
});

document.addEventListener("keyup", (e) => {
  // delete last
  const row = document.getElementById(`row-${currentRow}`);

  if (e.key === "Backspace"){
    console.log("back");
    return;
  }
  // full row
  if (currentItem === wordLengthMode) {
    row.children[currentItem].textContent = e.key;
    console.log("done");
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
  currentRow++;
  const $board = document.getElementById("board");
  const container = document.createElement("div");
  container.classList.add("row", "gap-2");
  container.id = "row-1";

  for (let i = 0; i < wordLengthMode; i++) {
    container.insertAdjacentHTML("beforeend",
      "<div class='d-flex justify-content-center align-items-center item'></div>"
    );
  };
  
  $board.insertAdjacentElement("beforeend", container);
};
