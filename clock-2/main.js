const endTime = new Date("2019-12-25 22:34:00").getTime();

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;
  const days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );

  let hours = Math.floor(
    (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
  );
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = Math.floor(
    (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
  );
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  spanD.textContent = days;
  spanH.textContent = hours;
  spanM.textContent = minutes;
  spanS.textContent = seconds;
}, 1000);
