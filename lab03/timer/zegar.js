let timer;
let seconds = 0;
let minutes = 0;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}
function stopTimer() {
  clearInterval(timer);
  timer = null;
}
function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  displayTimer();
}
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  displayTimer();
}
function displayTimer() {
  const timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.textContent = `${pad(minutes)} min: ${pad(seconds)}s`;
}
function pad(number) {
  return number < 10 ? "0" + number : number;
}