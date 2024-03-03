

function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let result = array[Math.floor(Math.random() * 3)];
    return result; 
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()

    if (computerSelection == player) return "Draw!";

    else if (computerSelection == "rock") {
        if (player == "paper") return "You WIN! Paper beats Rock";
        else if (player == "scissors") return "You LOSE! Rock beats Scissors";
    }

    else if (computerSelection == "paper") {
        if (player == "scissors") return "You WIN! Scissors beats Paper"
        else if (player == "rock") return "You LOSE! Paper beats Rock"
    }

    else if (computerSelection == "scissors") {
        if (player == "rock") return "You WIN! Rock beats Scissors"
        else if (player == "paper") return "You LOSE! Scissors beats Paper"
  }
  return 
}
  
  const playerSelection = "ROCK";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  