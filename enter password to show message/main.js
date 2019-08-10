const input = document.getElementById("pass");
const div = document.querySelector(".message");
const password = "user";

const message = "miłego dnia";

input.addEventListener("input", e => {
  //   console.log(e.target.value);
  //   input.style.backgroundColor = "black";
  //   input.style.color = "white";
  if (password === e.target.value) {
    div.textContent = message;
    e.target.value = "";
  } else [(div.textContent = "")];
});

input.addEventListener("focus", e => {
  e.target.classList.add("active");
});

input.addEventListener("blur", e => {
  e.target.classList.remove("active");
});
