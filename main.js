let playerScore = 0;
let computerScore = 0;
let winner = "";
let count = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function play(player, computer) {
  if (computer == player) return (winner = "tie");
  else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "paper" && player == "rock") ||
    (computer == "scissors" && player == "paper")
  ) {
    computerScore++;
    return (winner = "computer");
  } else {
    playerScore++;
    return (winner = "player");
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// UI

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const scoreInfo = document.getElementById("scoreInfo");
const PlayerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const winnerMsg = document.getElementById("winnerMsg");
const resetGame = document.getElementById("reset");
const scoreMsg = document.getElementById("scoreMsg");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorBtn.addEventListener("click", () => handleClick("scissors"));
resetGame.addEventListener("click", () => reset());

function handleClick(PlayerSeletion) {
  computerSelection = getComputerChoice().toLowerCase();
  if (isGameOver()) return;
  play(PlayerSeletion, computerSelection);
  score(PlayerSeletion, computerSelection);
}

function score(PlayerSeletion, computerSelection) {
  if (winner === "tie") {
    scoreInfo.textContent = "it's a Tie!";
    scoreMsg.textContent = `${PlayerSeletion} ties with ${computerSelection}`;
  } else if (winner === "player") {
    scoreInfo.textContent = "You Won!";
    scoreMsg.textContent = `${PlayerSeletion} beats ${computerSelection}`;
  } else {
    scoreInfo.textContent = "You Lost!";
    scoreMsg.textContent = `${PlayerSeletion} is beaten by ${computerSelection}`;
  }

  PlayerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;

  if (isGameOver()) {
    return playerScore > computerScore
      ? (winnerMsg.textContent = "You Won!")
      : (winnerMsg.textContent = "You Lost!");
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  PlayerScorePara.textContent = "Player: 0";
  computerScorePara.textContent = "Computer: 0";
  scoreInfo.textContent = "";
  winnerMsg.textContent = "";
  scoreMsg.textContent = "";
}
