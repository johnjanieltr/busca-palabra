const printRow = () => {
  if (currentRow >= 5) return console.log("Game end");

  currentItem = 0;
  currentRow++;

  const $board = document.getElementById("board");
  const container = document.createElement("div");
  container.classList.add("row", "gap-2");
  container.id = `row-${currentRow}`;

  for (let i = 0; i < wordLengthMode; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      "<div class='d-flex justify-content-center align-items-center item'></div>"
    );
  }

  $board.insertAdjacentElement("beforeend", container);
};

export default printRow;
