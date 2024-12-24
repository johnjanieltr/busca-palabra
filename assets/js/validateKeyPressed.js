// This function validates that the key pressed by the user is valid for the game

let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]$/;

const validateKeyPressed = (key) => {
  if (key === "Backspace") return true;
  if (regExp.test(key)) return true;
  return false;
};

export default validateKeyPressed;
