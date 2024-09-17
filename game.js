// Mock data for questions and answers
const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest mammal?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let score = 0;
let username = "";

// DOM Elements
const loginForm = document.getElementById("loginForm");
const loginArea = document.getElementById("loginArea");
const gameArea = document.getElementById("gameArea");
const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");
const submitGuessBtn = document.getElementById("submitGuess");
const nextQuestionBtn = document.getElementById("nextQuestion");
const highScoreElement = document.getElementById("highScore");
const scoreboardSection = document.getElementById("scoreboard");

// Handle user login
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    username = document.getElementById("username").value.trim();

    if (username) {
        loginArea.classList.add("hidden");
        gameArea.classList.remove("hidden");
        loadQuestion();
    }
});

// Load question
function loadQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
}

// Handle guess submission
submitGuessBtn.addEventListener("click", () => {
    const userGuess = document.getElementById("userGuess").value.trim();

    if (userGuess.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    nextQuestionBtn.classList.remove("hidden");
});

// Move to next question or end game
nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        feedbackElement.textContent = "";
        nextQuestionBtn.classList.add("hidden");
        document.getElementById("userGuess").value = "";
    } else {
        endGame();
    }
});

// End game and show score
function endGame() {
    gameArea.classList.add("hidden");
    scoreboardSection.classList.remove("hidden");
    highScoreElement.textContent = score;
}
