//Create array of words
var words = [
    'JEDI', 
    'SITH', 
    'FORCE', 
    'YODA', 
    'SKYWALKER',
    'LIGHTSABER',
    'BLASTER',
    'EMPIRE',
    'DROIDS',
    'PRINCESS'];
//Choose word randomly
var word = words[Math.floor(Math.random() * words.length)];
let currentWord = words[word];
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
var remainingLetters = word.length;

//         **********Main Game Loop**********

while (remainingLetters > 0){
    //show player their progress
    alert(answerArray.join(" "));

    //get a guess from player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");

    //if the guess is blank
    if (guess == null){
        //exit game loop
        break;
    //if the guess is more than one letter or no letters
    } else if (guess.length !== 1){
        //alert player to guess single letter only
        alert("Please enter a single letter.");
        //if valid guess
    } else {
        //update the game state with the guess
        for (var j = 0; j < word.length; j++){
            //if the letter they guessed is in the word
            //at that point or index
            if (word[j] === guess) {
                //update answer array with the letter they guessed
                answerArray[j] = guess;
                //subtract one from remaining letters
                remainingLetters--;
            }
        }
    }
    //end of game loop
}
//let player know the word
alert(answerArray.join(" "));
//congratulate the player
alert("Good job! The answer was " + word);


// let underscore = [];
// let rightGuess = [];
// let wrongGuess = [];

// //testing
// console.log(currentWord);
// //create underscores based on length of word
// let generateUnderscore = () => {
//     for(let i = 0; i < currentWord.length; i++){
//         underscore.push('_ ');
//     }
//     return underscore;
// }
// //testing
// console.log(generateUnderscore());
// //get user's guess
// document.addEventListener('keypress', (event) => {
//     let guess = String.fromCharCode(event.keyCode);
//     //if user's guess is right
//     if (currentWord.indexOf(guess, 0) > -1 ) {
//         console.log(true);
//         //add to rightGuess array
//         rightGuess.push(guess);
//         console.log(rightGuess);
//         //replace underscore
//         underscore[currentWord.indexOf(guess, 0)] = guess;
//         //check if guesses match word
//         if(underscore.join('') == currentWord){
//             alert('You win.');
//         }


//     } else {
//         wrongGuess.push(guess);
//         console.log(wrongGuess);
//     }
// });
// //check if guess is right

// //if right push to right array
// //if wrong push to wrong array


// //User presses key to start game
// //computer chooses word from array
//     //get word length
//     //display number of letters as dashes
//     //if correct guess, replace dash with letter

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

// method 1: literal notation
str.replace(/hello/g, 'hi');

// method 2: RegExp object
str.replace(new RegExp('hello', 'g'), 'hi');

// output: hi world! hi people! Hello hi!