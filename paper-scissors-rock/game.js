// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
};

const game = {
  playerHand: "",
  aiHand: ""
};

const hands = [...document.querySelectorAll(".select img")];
const btnStart = document.querySelector("button");

const handSelection = e => {
  game.playerHand = e.target.dataset.option;
  hands.forEach(hand => (hand.style.boxShadow = ""));
  e.target.style.boxShadow = "0 0 0 4px yellow";
};

const aiChoice = () => {
  const aiHand = ["papier", "nożyczki", "kamień"];
  const idx = Math.floor(Math.random() * aiHand.length);
  return aiHand[idx];
};

const checkResult = (player, ai) => {
  console.log(player, ai);
  if (player === ai) {
    return "draw";
  } else if (
    (player === "papier" && ai === "kamień") ||
    (player === "nożyczki" && ai === "papier") ||
    (player === "kamień" && ai === "nożyczki")
  ) {
    return "win";
  } else {
    // gam return "lose";
  }
};

const publishResult = (player, ai, result) => {
  document.querySelector('[data-summary="your-choice"]').style.fontSize =
    "40px";
  document.querySelector('[data-summary="your-choice"]').textContent = player;

  document.querySelector('[data-summary="ai-choice"]').style.fontSize = "40px";
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "WYGRAŁEŚ";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "lose") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "WYGRAŁ KOMPUTER";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "REMIS";
    document.querySelector('[data-summary="who-win"]').style.color = "blue";
  }
};
const endGame = () => {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
  game.playerHand = "";
  game.aiHand = "";
};

const startGame = e => {
  if (!game.playerHand) {
    alert("Wybierz nożyczki, papier, kamień");
    return;
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
};

hands.forEach(hand => hand.addEventListener("click", handSelection));
btnStart.addEventListener("click", startGame);
