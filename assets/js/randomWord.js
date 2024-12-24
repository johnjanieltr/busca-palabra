import words from "./words.js";

// this function return a random word form a list of words
const randomWord = () => {
  let randomNumber = Math.round(Math.random() * words.length);
  if (!randomNumber) console.log("Ah ocurrido un error");
  return words[randomNumber];
};

export default randomWord;