// nested if else

// winning number is 19

// 19 your guess is right
// 17 to low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
  console.log("Your Guess is right !!!");
} else {
  if (userGuess < winningNumber) {
    console.log("to low !!!");
  } else {
    console.log("to high !!!");
  }
}
