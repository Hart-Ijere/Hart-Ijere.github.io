const questions = [
    { question: "What's the capital of France?", answer: "Paris" },
    { question: "What's 2 + 2?", answer: "4" },
    { question: "What is the largest mammal?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("submitGuess").addEventListener("click", checkGuess);
document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
document.getElementById("restartGame").addEventListener("click", restartGame);

function startGame() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("gameArea").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkGuess() {
    const userGuess = document.getElementById("userGuess").value.trim();
    const feedbackElement = document.getElementById("feedback");
    
    if (userGuess.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    document.getElementById("nextQuestion").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("feedback").textContent = "";
        document.getElementById("userGuess").value = "";
        document.getElementById("nextQuestion").classList.add("hidden");
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("gameArea").classList.add("hidden");
    document.getElementById("gameOver").classList.remove("hidden");
    document.getElementById("score").textContent = score;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("gameOver").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");
}
