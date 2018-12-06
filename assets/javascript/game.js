

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userGuess = [];
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesLeftText = document.getElementById("guessesLeftText");
var lettersGuessedText = document.getElementById("lettersGuessedText");


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// This function determines which letter was guessed / is run whenever the user presses a key.
// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

userGuess = document.onkeyup = function(event) {
  userGuess = event.key;
  if ((userGuess === computerGuess)) {
    wins++;
  } 
  else {
    guessesLeft--;
    lettersGuessed.push(userGuess);
  } 

  if ((guessesLeft == 0)) {
    alert("You Lose!");
    guessesLeft = 10;
    lettersGuessed = [];
    losses++;
  }

// Display the wins/losses/letters guessed.
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesLeftText.textContent = "guesses left: " + guessesLeft;
  lettersGuessedText.textContent = "letters guessed: " + lettersGuessed;
};