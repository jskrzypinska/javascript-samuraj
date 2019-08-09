document.body.addEventListener("click", e => {
  const x = e.clientX;
  const y = e.clientY;

  console.log(x, y);

  if (x % 2 === 0 && y % 2 === 0) {
    document.body.style.background = "red";
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    document.body.style.background = "blue";
  } else if (x % 2 === 0 || y !== 0) {
    document.body.style.background = "green";
  } else if (x % 2 !== 0 || y === 0) {
    document.body.style.background = "green";
  }
});

// 1)jeśli wartość x dla clientX i y dla clientY jest parzysta
// -kolor czerwony
// 2)wartość x i y nieparzysta - kolor niebieski
// 3)jeden z kolorow jest parzysty, a drugi nie parzysty to kolor
// zielony

// document.body.addEventListener("click", e => {
//   console.log(e.clientX, e.clientY);
//   const color = getColor(event);
//   document.body.style.backgroundColor = color;
// });

// const getColor = event => {
//   if (event.clientX % 2 === 0) {
//     if (event.clientY % 2 === 0) {
//       return "red";
//     } else {
//       return "green ";
//     }
//   } else {
//     if (event.clientY % 2 === 0) {
//       return "green";
//     } else {
//       return "blue";
//     }
//   }
// };
