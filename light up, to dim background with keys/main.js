let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = e => {
  //   console.log(e.keyCode);
  //   const keyUp = e.keyCode;
  //   const keyDown = e.keyCode;

  //   if (keyUp === 38) {
  //     if (red < 255) {
  //       red += 10;
  //       green += 10;
  //       blue += 10;
  //     }
  //   } else if (keyDown === 40) {
  //     if (red > 0) {
  //       red -= 10;
  //       green -= 10;
  //       blue -= 10;
  //     }
  //   }
  //   console.log(red);
  //   return (document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`);
  switch (e.keyCode) {
    case 38:
      red -= 20;
      green -= 20;
      blue -= 20;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      break;
    case 40:
      red += 20;
      green += 20;
      blue += 20;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
  }
};

window.addEventListener("keydown", changeColor);
