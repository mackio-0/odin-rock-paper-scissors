function getComputerSelection() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChoice;
  if (randomNumber === 1) randomChoice = "rock";
  else if (randomNumber === 2) randomChoice = "paper";
  else randomChoice = "scissor";
  return randomChoice;
}

const computerSelection = getComputerSelection();
const playerSelection = "Rock";

let playerSelectionLowerCase = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelectionLowerCase === "rock" && computerSelection === "rock") {
    console.log("Draw, Play again!");
    // console.log("Computer : " + computerSelection);
    // console.log("Player : " + playerSelectionLowerCase);
    playRound();
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelection === "paper"
  ) {
    console.log("You win! Paper beat rock!");
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelection === "scissor"
  ) {
    console.log("I win! Rock beat scissor");
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelection === "paper"
  ) {
    console.log("Draw, Play again!");
    playRound();
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelection === "rock"
  ) {
    console.log("I win! Paper beat rock!");
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelection === "scissor"
  ) {
    console.log("You win! Scisoor beat paper");
  } else if (
    playerSelectionLowerCase === "scissor" &&
    computerSelection === "scissor"
  ) {
    console.log("Draw, Play again!");
    playRound();
  } else if (
    playerSelectionLowerCase === "scissor" &&
    computerSelection === "paper"
  ) {
    console.log("I win! Paper beat scissor!");
  } else {
    console.log("You win! Rock beat scissor");
  }
}

// console.log("Computer : " + computerSelection);
// console.log("Player : " + playerSelectionLowerCase);

playRound(playerSelectionLowerCase, computerSelection);

// getComputerSelection();
