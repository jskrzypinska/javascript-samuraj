// let number = 0;

// const addNumber = () => {
//   number++;
//   document.body.textContent = `aktualny stan licznika to ${number}`;
// };

// window.addEventListener("click", addNumber);

//użycie domknięcia CLOSURE

const add = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `aktualny stan licznika to ${number}`;
  };
};

const counter = add();
const counterFrom5 = add(5);

document.addEventListener("click", counterFrom5);
