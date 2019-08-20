const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    document.body.textContent = `Imię użytkownika to ${userName}, ${
      userAge >= 18 ? "Możesz kupić piwo" : "Nie możesz kupić piwa"
    }
      `;
  }
  return showName;
};

const kazik = user("Kazik", 25);

kazik();
