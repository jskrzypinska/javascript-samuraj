console.log("Działa");

const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");

const showTime = document.querySelector(".time div");

let time = 0;
let active = false;
let idInt;

const startTime = () => {
  time++;

  showTime.textContent = (time / 100).toFixed(2);
};

const start = () => {
  if (!active) {
    active = !active;
    startBtn.textContent = "Pause";
    idInt = setInterval(startTime, 100);
  } else {
    active = !active;
    startBtn.textContent = "Start";
    clearInterval(idInt);
  }
};

const reset = () => {
  time = 0;
  active = false;
  showTime.textContent = "---";
  startBtn.textContent = "Start";
  clearInterval(idInt);
};

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
