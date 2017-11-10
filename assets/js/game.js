
//  Game variables

//  Alphabet array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//  Stat counters
var user_wins;
var user_losses;
var user_guesses_left;
var letters_guessed;
var computer_guess;

newGame();

document.onkeyup = function (event) {
    var keyPressed = event.key;

    if(letters.indexOf(keyPressed) >= 0){
        if(keyPressed === computer_guess){
            recordWin();
        }
        else{
            recordIncorrectGuess(keyPressed);
        }

        if(user_guesses_left === 0){
            recordLoss();
        }
    }
}

function newGame() {
    user_wins = 0;
    user_losses = 0;
    user_guesses_left = 9;
    letters_guessed = "";
    computer_guess = "";
    document.getElementById("userWins").textContent = user_wins;
    document.getElementById("userLosses").textContent = user_losses;
    document.getElementById("userGuessesLeft").textContent = user_guesses_left;
    document.getElementById("lettersGuessed").textContent = letters_guessed;
    computer_guess = letters[Math.floor(Math.random() * letters.length)];
}

function newRound() {
    user_guesses_left = 9;
    document.getElementById("userGuessesLeft").textContent = user_guesses_left;
    letters_guessed = "";
    document.getElementById("lettersGuessed").textContent = letters_guessed;
    computer_guess = letters[Math.floor(Math.random() * letters.length)];
}

function recordWin() {
    user_wins++;
    document.getElementById("userWins").textContent = user_wins;
    newRound();
}

function recordLoss() {
    user_losses++;
    document.getElementById("userLosses").textContent = user_losses;
    newRound();
}

function recordIncorrectGuess(userGuess) {
    user_guesses_left--;
    document.getElementById("lettersGuessed").textContent += userGuess + ",";
    document.getElementById("userGuessesLeft").textContent = user_guesses_left;
}