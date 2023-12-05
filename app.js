function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomChoice;
    if (randomNumber === 1)     randomChoice = "Rock";
    else if (randomNumber === 2)    randomChoice = "Paper";
    else    randomChoice = "Scissor";
    return randomChoice;
}

let computerSelection = getComputerSelection();


// getComputerSelection();