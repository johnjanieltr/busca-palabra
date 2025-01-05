const $result = document.getElementById("result");
const $resultMsg = document.getElementById("result-msg");
const $btnPlayAgain = document.getElementById("btn-play-again");

const showResult = (result) => {
  if (result) {
    $resultMsg.textContent = "¡Ganaste!";
    $btnPlayAgain.textContent = "Jugar de nuevo";
  } else {
    $resultMsg.textContent = "Perdiste 😢";
    $btnPlayAgain.textContent = "Voler a intentar";
  }
  // result
  $result.classList.remove("d-none");
  setTimeout(() => $result.classList.remove("opacity-0"), 50);
}

export default showResult;
