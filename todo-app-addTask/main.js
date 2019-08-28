console.log("działa");

const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, index) => {
    toDoElement.id = index;
    ul.appendChild(toDoElement);
  });
};

const removeTask = e => {
  const index = e.target.parentNode.id;
  console.log(index);
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
};

const addTask = e => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;
  const newTask = document.createElement("li");
  newTask.className = "task";
  newTask.innerHTML = titleTask + "<button>Usuń</button>";
  toDoList.push(newTask);
  renderList();
  ul.appendChild(newTask);
  input.value = "";
  //   const liItems = document.querySelectorAll("li.task").length;
  taskNumber.textContent = listItems.length;
  newTask.querySelector("button").addEventListener("click", removeTask);
};

form.addEventListener("submit", addTask);
