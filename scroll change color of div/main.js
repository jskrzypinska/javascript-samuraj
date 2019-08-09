document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);

let size = 100;
let grow = true;

div.style.width = "100%";
div.style.position = "fixed";
div.style.left = "0px";
div.style.top = "0px";

div.style.height = size + "px";

const changeHeight = function() {
  if (size >= window.innerHeight / 2) {
    grow = !grow;
  } else if (size <= 0) {
    grow = !grow;
  }

  if (grow) {
    size += 10;

    div.style.background = "green";
  } else {
    size -= 10;

    div.style.background = "red";
  }
  div.style.height = size + "px";
};

window.addEventListener("scroll", changeHeight);
