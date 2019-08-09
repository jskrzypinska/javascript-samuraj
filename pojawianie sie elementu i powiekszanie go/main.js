const btn = document.querySelector("button");
const liList = [...document.getElementsByTagName("li")];

let size = 10;

// btn.addEventListener("click", function() {
//   size++;
//   liList.forEach(li => {
//     li.style.display = "block";

//     li.style.fontSize = size + "px";
//   });
// });

btn.addEventListener("click", () => {
  for (let i = 0; i < liList.length; i++) {
    liList[i].style.display = "block";
    liList[i].style.fontSize = size + "px";
  }
  size++;
});
