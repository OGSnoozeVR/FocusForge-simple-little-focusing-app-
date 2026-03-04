let time = 25 * 60;
let timerInterval = null;
let sessions = 0;

const timerDisplay = document.getElementById("timer");
const sessionsDisplay = document.getElementById("sessions");

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent =
    `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      sessions++;
      sessionsDisplay.textContent = sessions;
      alert("Session complete! Great work.");
      time = 25 * 60;
      updateTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25 * 60;
  updateTimer();
}

function setGoal() {
  const goal = document.getElementById("goalInput").value;
  document.getElementById("currentGoal").textContent = "Today's Goal: " + goal;
}

updateTimer();
