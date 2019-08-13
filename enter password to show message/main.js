const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["user", "wiosna", "hela"];

const messages = ["miłego dnia", "jeszcze milszego dnia", "Helenka"];

input.addEventListener("input", e => {
  const text = e.target.value;
  div.textContent = "";
  passwords.forEach((password, index) => {
    if (password === text) {
      console.log(password, index);
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});

input.addEventListener("focus", e => {
  e.target.classList.add("active");
});

input.addEventListener("blur", e => {
  e.target.classList.remove("active");
});

// if (password === e.target.value) {
//   div.textContent = message;
//   e.target.value = "";
// } else [(div.textContent = "")];
