function getComputerSelection() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChoice;
  if (randomNumber === 1) randomChoice = "rock";
  else if (randomNumber === 2) randomChoice = "paper";
  else randomChoice = "scissor";
  return randomChoice;
}

const computerSelection = getComputerSelection();

function playRound(playerSelectionLowerCase, computerSelection) {
  if (playerSelectionLowerCase === "rock" && computerSelection === "rock") {
    console.log("Draw, Play again!");
    // console.log("Computer : " + computerSelection);
    // console.log("Player : " + playerSelectionLowerCase);
    playRound();
    return 0;
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelection === "paper"
  ) {
    console.log("You win! Paper beat rock!");
    return 2;
  } else if (
    playerSelectionLowerCase === "rock" &&
    computerSelection === "scissor"
  ) {
    console.log("I win! Rock beat scissor");
    return 1;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelection === "paper"
  ) {
    console.log("Draw, Play again!");
    playRound();
    return 0;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelection === "rock"
  ) {
    console.log("I win! Paper beat rock!");
    return 1;
  } else if (
    playerSelectionLowerCase === "paper" &&
    computerSelection === "scissor"
  ) {
    console.log("You win! Scisoor beat paper");
    return 2;
  } else if (
    playerSelectionLowerCase === "scissor" &&
    computerSelection === "scissor"
  ) {
    console.log("Draw, Play again!");
    playRound();
    return 0;
  } else if (
    playerSelectionLowerCase === "scissor" &&
    computerSelection === "paper"
  ) {
    console.log("I win! Paper beat scissor!");
    return 1;
  } else {
    console.log("You win! Rock beat scissor");
    return 2;
  }
}

// console.log("Computer : " + computerSelection);
// console.log("Player : " + playerSelectionLowerCase);

function game() {
  let scoreForPlayer = 0;
  let scoreForComputer = 0;
  let scorePerGame = 0;

  for (let i = 0; i <= 4; i++) {
    const playerSelectionLowerCase = prompt(
      "Choose one, Rock, Paper, Scissor?"
    ).toLowerCase();
    scorePerGame = playRound(playerSelectionLowerCase, computerSelection);
    if (scorePerGame === 1) {
      scoreForPlayer++;
    } else if (scorePerGame === 2) {
      scoreForComputer++;
    }
  }

  let result =
    scoreForPlayer > scoreForComputer ? "Player win!" : "Computer win!";
  console.log(result);
}

game();
