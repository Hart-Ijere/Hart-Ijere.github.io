// Generate random number for the game
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let loggedIn = false;
let username = "";

// DOM Elements
const userGuessInput = document.getElementById("userGuess");
const submitGuessBtn = document.getElementById("submitGuess");
const feedbackElement = document.getElementById("feedback");
const nextGameBtn = document.getElementById("nextGame");
const loginPromptBtn = document.getElementById("loginPrompt");
const loginArea = document.getElementById("loginArea");
const loginForm = document.getElementById("loginForm");
const gameArea = document.getElementById("gameArea");

// Handle Guess Submission
submitGuessBtn.addEventListener("click", () => {
    const userGuess = Number(userGuessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        feedbackElement.textContent = "Please enter a number between 1 and 10.";
        return;
    }

    attempts++;
    if (userGuess === randomNumber) {
        feedbackElement.textContent = `Congratulations! You've guessed the correct number in ${attempts} attempts.`;
        nextGameBtn.classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "Too low! Try again.";
    } else {
        feedbackElement.textContent = "Too high! Try again.";
    }
});

// Play Again
nextGameBtn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    feedbackElement.textContent = "";
    nextGameBtn.classList.add("hidden");
    userGuessInput.value = "";
});

// Show Login Form on Prompt
loginPromptBtn.addEventListener("click", () => {
    loginArea.classList.remove("hidden");
    gameArea.classList.add("hidden");
});

// Handle Login
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    username = document.getElementById("username").value.trim();
    if (username) {
        loggedIn = true;
        loginArea.classList.add("hidden");
        gameArea.classList.remove("hidden");
        loginPromptBtn.classList.add("hidden");
        alert(`Welcome, ${username}! Your progress will now be tracked.`);
    }
});
