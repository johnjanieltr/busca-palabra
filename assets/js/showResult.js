import { soundWin, soundLose } from "./sounds.js";

const $result = document.getElementById("result");
const $resultMsg = document.getElementById("result-msg");
const $btnPlayAgain = document.getElementById("btn-play-again");

const showResult = (result) => {
  if (result) {
    $resultMsg.textContent = "¡Ganaste!";
    $btnPlayAgain.textContent = "Jugar de nuevo";
    soundWin();
  } else {
    $resultMsg.textContent = "Perdiste 😢";
    $btnPlayAgain.textContent = "Voler a intentar";
    soundLose();
  }
  // result
  $result.classList.remove("d-none");
  setTimeout(() => $result.classList.remove("opacity-0"), 0);
};

export default showResult;
