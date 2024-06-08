var secretNumber = 7;

var userGuess = +(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    document.write("Close enough to the correct answer");
} else {
    document.write("Sorry, incorrect guess. The secret number was " + secretNumber);
}
