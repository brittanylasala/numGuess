let prompt = require("prompt-sync")();
let correctNumber = 16;
let tries = {};
let numTries = 0;
let answer = prompt("Guess a number: ");
while (answer) {
  if (/^[0-9]+$/.test(answer) === false) {
    console.log("Not a number! Try again!");
    answer = prompt("Guess a number: "); 
  } else if (tries[answer] === 1) {
    console.log("Already Guessed!");
    answer = prompt("Guess a number: ");
  } else if (answer < correctNumber) {
    tries[answer] = 1;
    numTries += 1;
    console.log("Too Low!");
    answer = prompt("Guess a number: ");
  } else if (answer > correctNumber) {
    tries[answer] = 1;
    numTries += 1;
    console.log("Too High!");
    answer = prompt("Guess a number: ");
  } else if (answer == correctNumber) {
  numTries += 1;
  console.log("You got it! You took " + numTries + " attempts!");
  break;
  };
}; 
