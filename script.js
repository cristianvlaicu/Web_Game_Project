"use strict";

// Generates a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initializes the player's score to 20
let score = 20;

// Initializes the highscore to 0
let highscore = 0;

// Function to display a message in the DOM element with the "message" class
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

// Adds an event listener to the "Check" button for a click event
document.querySelector(".check").addEventListener("click", function () {
  // Gets the value from the input field with the "guess" class and converts it to a number
  const guess = Number(document.querySelector(".guess").value);

  // Executes when there is no input in the input field
  if (!guess) {
    displayMessage("⛔ No number!"); // Displays "No number!" message

    // Executes when the player's guess matches the secret number
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!"); // Displays a success message
    document.querySelector(".number").textContent = secretNumber; // Shows the secret number

    // Changes the background color of the body to green
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Increases the width of the "number" element
    document.querySelector(".number").style.width = "30rem";

    // Updates the highscore if the current score is greater than the highscore
    if (score > highscore) {
      highscore = score; // Sets the new highscore
      document.querySelector(".highscore").textContent = highscore; // Updates the highscore display
    }

    // Executes when the guess is wrong (too high or too low)
  } else if (guess !== secretNumber) {
    // Executes if the player still has attempts left
    if (score > 1) {
      // Displays "Too high!" or "Too low!" based on the guess
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");

      score--; // Decreases the score by 1

      // Updates the score display
      document.querySelector(".score").textContent = score;

      // Executes when the player has no attempts left
    } else {
      displayMessage("💥 You lost the game... try Again!"); // Displays a losing message

      document.querySelector(".score").textContent = 0; // Sets the score to 0
    }
  }
});

// Adds an event listener to the "Again" button for a click event
document.querySelector(".again").addEventListener("click", function () {
  score = 20; // Resets the score to 20
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Generates a new secret number

  displayMessage("Start guessing..."); // Displays the default message

  document.querySelector(".score").textContent = score; // Resets the score display
  document.querySelector(".number").textContent = "?"; // Resets the secret number display
  document.querySelector(".guess").value = ""; // Clears the input field

  document.querySelector("body").style.backgroundColor = "#222"; // Resets the background color to the default
  document.querySelector(".number").style.width = "15rem"; // Resets the width of the "number" element
});
