const btn = document.querySelector("button");
const section = document.querySelector("section");

const charts = "ABCDFGHIJK1234567890";
const codeNumbers = 1000;
const chartsNumber = 10;

const generateCode = () => {
  for (let i = 0; i < codeNumbers; i++) {
    let code = "";

    for (let j = 0; j < chartsNumber; j++) {
      let randomIndex = Math.floor(Math.random() * charts.length);
      code += charts[randomIndex];
    }
    const div = document.createElement("div");
    div.textContent = code;
    section.appendChild(div);
  }
};

btn.addEventListener("click", generateCode);
