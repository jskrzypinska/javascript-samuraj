let size = 10;
let orderElement = 1;

const btnReset = document.createElement("button");
document.body.appendChild(btnReset);
btnReset.innerText = "Resetuj";

const init = () => {
  const createBtn = document.createElement("button");
  document.body.appendChild(createBtn);
  createBtn.innerText = "stworz elementy";

  const createUl = document.createElement("ul");
  document.body.appendChild(createUl);
  createUl.style.listStyle = "none";
  createBtn.addEventListener("click", createElements);
};

const createElements = () => {
  for (let i = 0; i < 10; i++) {
    const addLiElements = document.createElement("li");
    document.querySelector("ul").appendChild(addLiElements);
    addLiElements.innerText = `element ${orderElement++}`;
    addLiElements.style.fontSize = size + "px";
    size++;
  }
};

init();

btnReset.addEventListener("click", () => {
  document.querySelector("ul").textContent = "";
  size = 10;
  orderElement = 1;
});
