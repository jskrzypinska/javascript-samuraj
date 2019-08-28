const toDoList = [];

const inputSearch = document.getElementById("input-search");
const buttonSearch = document.getElementById("button-search");

const form = document.querySelector("form");
const inputAddTask = document.querySelector("form input");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const taskNumber = document.querySelector("h1 span");

const searchTasks = e => {
  const searchText = e.target.value.toLowerCase();
  let tasks = toDoList;
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
};

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, index) => {
    toDoElement.id = index;
    ul.appendChild(toDoElement);
  });
  taskNumber.textContent = listItems.length;
};

const removeTask = e => {
  const index = e.target.parentNode.id;

  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
};

const addTask = e => {
  e.preventDefault();
  const taskTitle = inputAddTask.value;
  if (inputAddTask === "") return;

  const newTask = document.createElement("li");
  newTask.className = "task";
  newTask.innerHTML = taskTitle + "<button> Usuń </button>";
  toDoList.push(newTask);
  renderList();
  ul.appendChild(newTask);
  inputAddTask.value = "";
  taskNumber.textContent = listItems.length;
  newTask.querySelector("button").addEventListener("click", removeTask);
};

inputSearch.addEventListener("input", searchTasks);

form.addEventListener("submit", addTask);
