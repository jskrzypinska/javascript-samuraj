const timer = (start = 0) => {
  let time = start;

  function showTime() {
    document.body.textContent = `${++time} sekund`;
  }
  return showTime;
};

const now = timer(0);

setInterval(now, 1000);
