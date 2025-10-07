let timeLeft = 10;
let taps = 0;
let timerInterval;

const startBtn = document.getElementById("startBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const shareBtn = document.getElementById("shareBtn");
const rialoLogo = document.getElementById("rialoLogo");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("result");

function getMessage(taps) {
  if (taps <= 15) return "😬 Hmm… you need more Rialo vibes!";
  if (taps <= 37) return "🔥 Getting there… keep exploring!";
  if (taps <= 52) return "🚀 Wow! True Rialover!";
  return "👑💖 Legendary Rialover!";
}

function startGame() {
  taps = 0;
  timeLeft = 10;
  scoreDisplay.textContent = "Taps: 0";
  resultDisplay.textContent = "";
  startBtn.style.display = "none";
  tryAgainBtn.style.display = "none";
  shareBtn.style.display = "none";
  timerDisplay.textContent = "Time Left: 10s";

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
  resultDisplay.innerHTML = message;
  tryAgainBtn.style.display = "inline-block";
  shareBtn.style.display = "inline-block"; // 🟢 show share button
}

function restartGame() {
  startBtn.style.display = "inline-block";
  tryAgainBtn.style.display = "none";
  shareBtn.style.display = "none";
  resultDisplay.textContent = "";
  scoreDisplay.textContent = "Taps: 0";
  timerDisplay.textContent = "Time Left: 10s";
}

function shareOnX() {
  const message = getMessage(taps);
  const tweetText = `I just played the Rialover Tap Challenge 💖\n\n${message}\n\nMy taps: ${taps}\n\nPlay now 👉 rialover.vercel.app #RialoverChallenge #Rialo`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, "_blank");
}

startBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", restartGame);
shareBtn.addEventListener("click", shareOnX);
