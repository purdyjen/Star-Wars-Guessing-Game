//Create array of words
var words = [
  "JEDI",
  "SITH",
  "FORCE",
  "YODA",
  "SKYWALKER",
  "LIGHTSABER",
  "BLASTER",
  "EMPIRE",
  "DROIDS",
  "PRINCESS",
  "SHIP",
  "SPACE",
  "LANDO",
  "JABBA",
  "CHEWBACCA",
  "LIGHTSPEED",
  "REBEL",
  "ALLIANCE",
  "STARDESTROYER",
  "PLANET",
  "GALAXY",
  "STORMTROOPER",
  "PADAWAN",
  "MASTER",
  "OBI-WAN"
];

//Declare global variables
var underscore = [];
var wrongGuess = [];
var currentWordArray = [];
var totalWins = 0;
var guessesLeft = 13;
var currentWord;

//Choose word randomly
function makeWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
}

function generateLetterButtons () {
// Generate letter buttons
var charwrap = document.getElementById("buttons");
charwrap.innerHTML = "";
for (var i=65; i<91; i++) {
  var charnow = document.createElement("input");
  charnow.type = "button";
  charnow.value = String.fromCharCode(i);
  charnow.disabled = false;
  charnow.addEventListener("click", function() {
        selectedLetter(this.value);
        this.disabled = true;
      });
  charnow.setAttribute("class", "letters");
  charwrap.appendChild(charnow);
}
}

generateLetterButtons();

//start game
function startGame() {
  makeWord();
  //create underscores based on length of word
  function generateUnderscore() {

    for (var i = 0; i < currentWord.length; i++) {
      
      if (currentWord[i] == " "){
        underscore.push(" ");
      } else if (currentWord[i] == "-") {
        underscore.push("-");
      } else {
        underscore.push(" _ ");
      }
    }
    return underscore;
  }
  generateUnderscore();
  //splits individual characters of element into array
  currentWordArray = currentWord.split("");
  //prints underscores to screen
  var showUnderscores = document.getElementById("current");
  for (var j = 0; j < currentWordArray.length; j++) {
    showUnderscores.textContent += "  " + underscore[j] + "  ";
    
  }
}

window.onload = function(event) {
  startGame();

document.getElementById("letter-buttons").addEventListener("click", function () {
  document.getElementById('buttons').classList.toggle("hidden");
}, false);

document
  .getElementById("play-again")
  .addEventListener("click", function newGame() {
    underscore = [ ];
    wrongGuess = [ ];
    currentWordArray = [ ];
    guessesLeft = 13;
    currentWord;
    current.textContent = "Current Word:  " + underscore;
    guessed.textContent = "Wrong Letters Guessed: ";
    remaining.textContent = "Number of Incorrect Guesses Remaining: 10";
    startGame();
    generateLetterButtons();
  });
};

//get user's guess

function selectedLetter(letter) {
  console.log(letter);
//if user's guess is right
  if (currentWord.indexOf(letter) > -1) {

    for (index = 0; index < currentWord.length; index++) {
      if (currentWordArray[index] === letter) {
        underscore[index] = letter;
        word = underscore.join("  ");      //joins array so no commas displayed
        current.textContent = "Current Word:  " + word + "  ";
        win();
      }
    }
  } else {
    //if an incorrect letter has already been guessed
    for (index = 0; index < wrongGuess.length; index++) {
      if (wrongGuess[index] === letter) {
        alert("You've already guessed that letter!");
        return;
      }
    }
    //if incorrect letter is guessed, reduces number of remaining guesses by one
  
    wrongGuess.push(letter);
    guessesLeft--;
    lose();
    document.getElementById("remaining").textContent =
      "Number of Incorrect Guesses Remaining: " + guessesLeft;
    document.getElementById("guessed").textContent =
      "Wrong Letters Guessed: " + wrongGuess + " ";
  }
}
document.addEventListener("keypress", function(event) {
  var guess = String.fromCharCode(event.keyCode).toUpperCase();
  
//if user's guess is right
  if (currentWord.indexOf(guess) > -1) {

    for (index = 0; index < currentWord.length; index++) {
      if (currentWordArray[index] === guess) {
        underscore[index] = guess;
        word = underscore.join("  ");      //joins array so no commas displayed
        current.textContent = "Current Word:  " + word + "  ";
        win();
      }
    }
  } else {
    //if an incorrect letter has already been guessed
    for (index = 0; index < wrongGuess.length; index++) {
      if (wrongGuess[index] === guess) {
        alert("You've already guessed that letter!");
        return;
      }
    }
    //if incorrect letter is guessed, reduces number of remaining guesses by one
  
    wrongGuess.push(guess);
    guessesLeft--;
    lose();
    document.getElementById("remaining").textContent =
      "Number of Incorrect Guesses Remaining: " + guessesLeft;
    document.getElementById("guessed").textContent =
      "Wrong Letters Guessed: " + wrongGuess + " ";
  }
});

function win() {
  if (underscore.toString() === currentWordArray.toString()) {
    alert("You win!");
    totalWins++;
    document.getElementById("total-wins").textContent = "Wins: " + totalWins;
  }
}

function lose() {
  if (guessesLeft === 0) {
    alert("You lose! The word was " + currentWord + ".");
  }
}
