const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];
const newPasswords = [];

passwords.forEach(password => {
  const newPassword = password.toLowerCase();
  console.log(password);
  newPasswords.push(newPassword);
});

const passwordsToLowerCase = passwords.map(password => password.toLowerCase());

const showMessage = e => {
  const text = e.target.value.toLowerCase();
  //   newPasswords.forEach((password, index) => {
  //     if (password === text) {
  //       div.textContent = messages[index];
  //     }
  //   });
  for (let i = 0; i < passwordsToLowerCase.length; i++) {
    if (text === passwordsToLowerCase[i]) {
      div.innerText = messages[i];
    }
  }
};

input.addEventListener("input", showMessage);
