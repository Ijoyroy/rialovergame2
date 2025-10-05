let taps = 0;
let timeLeft = 10;
let timerInterval;

const logo = document.getElementById('rialoLogo');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

function getRialoverScore(taps) {
  let score = (taps / 75) * 100;
  return Math.min(Math.round(score), 100);
}

function getMessage(score) {
  if (score <= 20) return "😬 You need more Rialo vibes!";
  if (score <= 50) return "🔥 Keep exploring!";
  if (score <= 80) return "🚀 True Rialover!";
  return "🏆💖 Legendary Rialover!";
}

function endGame() {
  clearInterval(timerInterval);
  const finalScore = getRialoverScore(taps);
  scoreEl.innerText = `Final Rialover Score: ${finalScore}% - ${getMessage(finalScore)}`;
  timerEl.innerText = "Time's up!";
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

logo.addEventListener('click', () => {
  if (timeLeft <= 0) return;
  taps++;
  const currentScore = getRialoverScore(taps);
  scoreEl.innerText = `Rialover Score: ${currentScore}%`;
  if (!timerInterval) startTimer();
});
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
