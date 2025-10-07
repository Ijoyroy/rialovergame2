let timeLeft = 15;
let taps = 0;
let timerInterval;

const startBtn = document.getElementById("startBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const rialoLogo = document.getElementById("rialoLogo");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("result");

// 🎯 Function to get message based on taps
function getMessage(taps) {
  if (taps <= 15) return "😬 Hmm… you need more Rialo vibes!";
  if (taps <= 37) return "🔥 Getting there… keep exploring!";
  if (taps <= 60) return "🚀 Wow! True Rialover!";
  return "👑💖 Legendary Rialover!";
}

function startGame() {
  taps = 0;
  timeLeft = 15;
  scoreDisplay.textContent = "Taps: 0";
  resultDisplay.textContent = "";
  startBtn.style.display = "none";
  tryAgainBtn.style.display = "none";
  timerDisplay.textContent = "Time Left: 15s";

  rialoLogo.addEventListener("click", countTap);
  timerInterval = setInterval(updateTimer, 1000);
}

function countTap() {
  taps++;
  scoreDisplay.textContent = "Taps: " + taps;
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
  const message = getMessage(taps);
  resultDisplay.innerHTML = `${message}<br>💥 You tapped ${taps} times!`;
  tryAgainBtn.style.display = "inline-block";
}

function restartGame() {
  startBtn.style.display = "inline-block";
  tryAgainBtn.style.display = "none";
  resultDisplay.textContent = "";
  scoreDisplay.textContent = "Taps: 0";
  timerDisplay.textContent = "Time Left: 15s";
}

startBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", restartGame);
