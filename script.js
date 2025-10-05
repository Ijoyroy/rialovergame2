let timeLeft = 10;
let score = 0;
let timerInterval;

const startBtn = document.getElementById("startBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const rialoLogo = document.getElementById("rialoLogo");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("result");

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = "Taps: 0";
  resultDisplay.textContent = "";
  startBtn.style.display = "none";
  tryAgainBtn.style.display = "none";
  timerDisplay.textContent = "Time Left: 10s";

  rialoLogo.addEventListener("click", countTap);
  timerInterval = setInterval(updateTimer, 1000);
}

function countTap() {
  score++;
  scoreDisplay.textContent = "Taps: " + score;
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    rialoLogo.removeEventListener("click", countTap);
    showResult();
  }
}

function showResult() {
  let percentage = Math.min((score / 75) * 100, 100).toFixed(1);
  resultDisplay.innerHTML = `🎉 You got ${percentage}% Rialover Score!`;
  tryAgainBtn.style.display = "inline-block";
}

function restartGame() {
  startBtn.style.display = "inline-block";
  tryAgainBtn.style.display = "none";
  resultDisplay.textContent = "";
  scoreDisplay.textContent = "Taps: 0";
  timerDisplay.textContent = "Time Left: 10s";
}

startBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", restartGame);
