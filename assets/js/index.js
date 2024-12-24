import printRow from "./printRow.js";
import validateKeyPressed from "./validateKeyPressed.js";

let wordLengthMode = 5;
let currentRow = -1;
let currentItem = 0;

const ssOptionsContainer = document.getElementById("ss-options-container");

document.addEventListener("DOMContentLoaded", () => {
  // printRow();
});

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-play")) {
    document.getElementById("header").classList.remove("header--center");
    ssOptionsContainer.classList.add("opacity-0");
    setTimeout(() => {
      ssOptionsContainer.classList.add("d-none");
    }, 500);
  }
});

document.addEventListener("keyup", (e) => {
  // detect if the key pressed is valid (returns if not valid)
  if (!validateKeyPressed(e.key)) return;

  const row = document.getElementById(`row-${currentRow}`);

  // delete the last letter pressed
  if (e.key === "Backspace") {
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
