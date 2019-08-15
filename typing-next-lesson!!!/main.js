const spnTxt = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txts = ["text1", "text2", "text3"];

// txt[0] pierwszy element tablicy
// txt[0][2] literka k

// let licznik = 1;

let activeLetter = 0;
let activeText = 0;

const addLetter = () => {
  spnTxt.textContent += txts[activeText][activeLetter];
  activeLetter++;
  if (activeLetter === txts[activeText].length) {
    activeText++;
    if (activeText === txts.length) return;

    return setTimeout(() => {
      activeLetter = 0;
      spnTxt.textContent = "";
      addLetter();
    }, 1000);
  }
  //   for (let i = 0; i < txts.length; i++) {
  //     for (let j = 0; j < txts[i].length; j++) {
  //       let letter = txts[i][j];

  //       // spnTxt.textContent +=
  //       setTimeout(() => {
  //         spnTxt.textContent += letter;
  //       }, 500 * licznik);
  //       licznik++;
  //     }
  //   }
  // };

  setTimeout(addLetter, 100);
};

addLetter();

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

setInterval(cursorAnimation, 400);
