console.log("działa");

// const removeTask = e => {
//   //   e.target.remove();
//   //   e.target.parentNode.remove();
//   e.target.parentNode.style.textDecoration = "line-through";
//   e.target.remove();
// };

// document
//   .querySelectorAll("li button")
//   .forEach(item => item.addEventListener("click", removeTask));

const removeTask = e => {
  const index = e.target.dataset.key;
  document.querySelector(`li[data-key="${index}"]`).remove();
};

document
  .querySelectorAll("button")
  .forEach(item => item.addEventListener("click", removeTask));
