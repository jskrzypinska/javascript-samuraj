const btn = document.querySelector("button");
const div = document.querySelector("div");
const names = ["Wiola", "Maciek", "Eliza", "Kazik", "Czesław"];
const txt = ["Wydaje mi się, ", "Jestem pewnien, ", "Myślę, "];

const randomNames = function() {
  const indx = Math.floor(Math.random() * names.length);
  //   const indxTWo = Math.floor(Math.random() * txt.length);
  div.textContent = `${
    txt[Math.floor(Math.random() * txt.length)]
  }że najlepsze imię to ${names[indx]}`;
};

btn.addEventListener("click", randomNames);
