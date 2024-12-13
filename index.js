import words from "./words.js";

document.addEventListener("keyup", (e) => {
  console.log(e);
});

const randomWord = () => {
  let randomNumber = Math.round(Math.random() * words.length);
  return words[randomNumber];
};

console.log(randomWord());
