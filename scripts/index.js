

function getComputerChoice() {
    let array = ["Rock", "Paper", "Scissors"];
    let result = array[Math.floor(Math.random() * 3)];
    return result; 
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (computer == player) return "Draw!";

    else if (computer == "rock") {
        if (player == "paper") return "WIN";
        else if (player == "scissors") return "LOSE";
    }

    else if (computer == "paper") {
        if (player == "scissors") return "WIN";
        else if (player == "rock") return "LOSE";
    }

    else if (computer == "scissors") {
        if (player == "rock") return "WIN";
        else if (player == "paper") return "LOSE";
  }
  return "ERROR"
}
  
  function playgame() {
    let computerCount = 0, playerCount = 0;

    for (let i = 0; i < 5; ++i) {
        const playerSelection = prompt("Input Rock, Paper or Scissors:");
        const computerSelection = getComputerChoice();
        const answer = playRound(playerSelection, computerSelection)
        if (answer == "Draw!") {
            console.log("Draw!");
            computerCount += 1;
            playerCount += 1;
            console.log(`You: ${playerCount}`);
            console.log(`Computer: ${computerCount}`);
            console.log("");
        } else if (answer == "WIN"){
            console.log(`You WIN! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
            playerCount += 1;
            console.log(`You: ${playerCount}`);
            console.log(`Computer: ${computerCount}`);
            console.log("");
        } else if (answer == "LOSE") {
            console.log(`You LOSE! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
            computerCount += 1;
            console.log(`You: ${playerCount}`);
            console.log(`Computer: ${computerCount}`);
            console.log("");
        } else {
            console.log(answer);
            console.log("")
            console.log("GAME OVER")
            return
        }
    }
    if (computerCount > playerCount) {
        console.log(`You: ${playerCount}`)
        console.log(`Computer: ${computerCount}`)
        console.log("Computer WIN")
        console.log("")
        console.log("GAME OVER")
    } else if (computerCount < playerCount) {
        console.log(`You: ${playerCount}`)
        console.log(`Computer: ${computerCount}`)
        console.log("You WIN")
        console.log("")
        console.log("GAME OVER")
    } else {
        console.log(`You: ${playerCount}`)
        console.log(`Computer: ${computerCount}`)
        console.log("Draw!")
        console.log("")
        console.log("GAME OVER")
    }
    return
  }
    
  