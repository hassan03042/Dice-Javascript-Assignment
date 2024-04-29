// Generate a random secret number between 1 and 6
const secretNumber = Math.floor(Math.random() * 6) + 1;

// Initialize points
let points = 0;

// Allow the user to guess the secret number
function guessSecretNumber() {
    const guess = parseInt(prompt("Guess the secret number between 1 and 6:"));

    if (guess === secretNumber) {
        if (points === 0) {
            points = 6;
        } else {
            points = 3;
        }
        alert(`Congratulations! You guessed the secret number ${secretNumber} correctly on your first attempt. You earned ${points} points.`);
    } else {
        alert("Sorry, that's incorrect.");

        const secondGuess = parseInt(prompt("Guess again:"));

        if (secondGuess === secretNumber) {
            points = 3;
            alert(`Congratulations! You guessed the secret number ${secretNumber} correctly. You earned ${points} points.`);
        } else {
            alert(`Sorry, the secret number was ${secretNumber}. You earned 0 points.`);
        }
    }
}

// Call the function to start the game
guessSecretNumber();
