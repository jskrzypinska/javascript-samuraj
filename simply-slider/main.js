const sildeList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst"
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst"
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst"
  }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

let time = 3000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === sildeList.length) {
    active = 0;
  }
  image.src = sildeList[active].img;
  h1.textContent = sildeList[active].text;
  changeDot();
};

const keyChangeSlide = e => {
  //   console.log(e);
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(intervalId);
    e.keyCode === 37 ? active-- : active++;
    if (active === sildeList.length) {
      active = 0;
    } else if (active < 0) {
      active = sildeList.length - 1;
    }
    image.src = sildeList[active].img;
    h1.textContent = sildeList[active].text;
    changeDot();
    intervalId = setInterval(changeSlide, time);
  }
};

let intervalId = setInterval(changeSlide, time);

window.addEventListener("keydown", keyChangeSlide);
