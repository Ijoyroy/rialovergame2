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
