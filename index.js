let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const submitGuess = document.querySelector(".submitGuess");

const resultPara = document.querySelector(".resultParagraph");

let counter = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  let userGuess = Number(guessField.value);

  if (counter === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You nailed it!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (counter === 10) {
    lastResult.textContent = "!!!GAME OVER!!! The number was: " + randomNumber;
    setGameOver();
  } else {
    lastResult.textContent = "Wrong guess! try Again.";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lastResult.textContent = "Number too LOW, try higher";
    } else if (userGuess > 100) {
      lastResult.textContent = "WTF IS THIS???? i said between 1-100 ONLY";
    } else if (userGuess > randomNumber) {
      lastResult.textContent = "Number too HIGH, Try lower";
    }
  }
  counter++;
  guessField.value = "";
  guessField.focus();
}
submitGuess.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  submitGuess.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start New game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  submitGuess.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";
  lastResult.textContent = "";
  guesses.textContent = "";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
