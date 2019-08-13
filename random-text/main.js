const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".clean");
const showAdviceBtn = document.querySelector(".showAdvice");
const showOptionsBtn = document.querySelector(".showOptions");
const advice = document.querySelector("h1");
const inp = document.querySelector("input");

let advices = [];

const addAdvices = e => {
  e.preventDefault();
  let txt = inp.value;

  advices.push(txt);
  alert(`${txt} został dodany`);
  inp.value = "";
};

const showAdvices = () => {
  alert(advices.join(",  "));
};

const showAdvice = () => {
  let ind = Math.floor(Math.random() * advices.length);
  advice.textContent = advices[ind];
};

addBtn.addEventListener("click", addAdvices);

resetBtn.addEventListener("click", () => {
  advices = [];
});

showOptionsBtn.addEventListener("click", showAdvices);

showAdviceBtn.addEventListener("click", showAdvice);
