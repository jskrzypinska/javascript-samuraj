const btn = document.querySelector("button");
const div = document.querySelector("div");
let inp = document.querySelector("input");

let arrayOfNames = [];

// inp.addEventListener("input", e => {
//   let name = e.target.value;
//   console.log(e.target.value);
// });

const addName = e => {
  e.preventDefault();
  const newName = inp.value;

  if (inp.value.length) {
    for (name of arrayOfNames) {
      if (name === newName) {
        alert("Już takie imię jest");
        return;
      }
    }

    arrayOfNames.push(newName);

    div.innerText = arrayOfNames;
    inp.value = "";
  }
};

btn.addEventListener("click", addName);
