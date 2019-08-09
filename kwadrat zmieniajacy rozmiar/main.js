const square = document.createElement("div");
document.body.appendChild(square);

let grow = true;

let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";

const changeSize = function() {
  if (grow) {
    size += 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }

  if (size >= window.innerWidth / 2) {
    grow = false;
  } else if (size == 0) {
    grow = true;
  }
};

window.addEventListener("scroll", changeSize);
