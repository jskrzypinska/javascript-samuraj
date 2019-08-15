const spnTxt = document.querySelector(".text");
const spnCurs = document.querySelector(".cursor");
const txt =
  "Nie ma zatem takiego człowieka, który kocha cierpienie samo w sobie, kto by do niego dążył lub chciał go doświadczyć tylko dlatego, że jest to cierpienie, a dlatego, że czasami zdarzają się takie okoliczności, w których to cierpienie może doprowadzić go do jakiejś wielkiej przyjemności. Dając przykład banalny: któż z nas kiedyś nie podejmował się trudnego wysiłku fizycznego, mając na względzie uzyskanie z tego korzyści? Kto ma jakiekolwiek prawo obwiniać człowieka, który wybiera przyjemność nie wiążącą się z przykrymi konsekwencjami, albo tego, kto unika takiego cierpienia, które nie prowadzi do przyjemności? Jednocześnie potępiamy ze słusznym oburzeniem i czujemy niechęć do ludzi, którzy są tak owładnięci urokami nietrwałej przyjemności, tak zaślepieni jej pragnieniem, że nie dostrzegają, iż następstwem ich postępowania będą z pewnością cierpienie i trudności.";

let idxTxt = 0;
const time = 50;

const addLetter = () => {
  spnTxt.textContent += txt[idxTxt];
  idxTxt++;
  if (idxTxt === txt.length) {
    clearInterval(indexTyping);
    clearInterval(indexCursor);
  }
};

const cursorAnimation = () => {
  spnCurs.classList.toggle("active");
};

const indexTyping = setInterval(addLetter, time);
const indexCursor = setInterval(cursorAnimation, 400);
