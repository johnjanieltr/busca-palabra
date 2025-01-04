const printBoardContent = () => {
  const $board = document.getElementById("board");
  let html = "";

  for (let i = 0; i < 5; i++) {
    html += `
      <div class="row justify-content-center gap-2" id="row-${i}">
        <div class='d-flex justify-content-center align-items-center item'></div>
        <div class='d-flex justify-content-center align-items-center item'></div>
        <div class='d-flex justify-content-center align-items-center item'></div>
        <div class='d-flex justify-content-center align-items-center item'></div>
        <div class='d-flex justify-content-center align-items-center item'></div>
      </div>
    `;
  }

  $board.insertAdjacentHTML("afterbegin", html);
};

export default printBoardContent;
