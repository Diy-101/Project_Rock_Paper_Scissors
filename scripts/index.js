
function getComputerChoice() {
    let array = ["Rock", "Paper", "Scissors"];
    let result = array[Math.floor(Math.random() * 3)];
    return result; 
}

function playerResylt(reply) {
    if (reply == "WIN") {
        const display = document.querySelector('.display');
        const question = display.firstElementChild;
        const answer = document.createElement('h2');
        const score = document.querySelector('#yourScore');

        answer.textContent = 'You win!'

        display.replaceChild(answer, question); 
        score.textContent = Number(score.innerHTML) + 1 
    }
    else if (reply == "LOSE") {
        const display = document.querySelector('.display');
        const question = display.firstElementChild;
        const answer = document.createElement('h2');
        const score = document.querySelector('#compScore');

        answer.textContent = 'You lose!'

        display.replaceChild(answer, question); 
        score.textContent = Number(score.innerHTML) + 1 
    }
    else if (reply == "Draw!") {
        const display = document.querySelector('.display');
        const question = display.firstElementChild;
        const answer = document.createElement('h2');
    
        answer.textContent = 'Draw!'

        display.replaceChild(answer, question); 
    }
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
}
  
  const btnrock = document.querySelector('#rock');
  btnrock.addEventListener('click', (e) => {
    let answer = playRound(e.target.id, getComputerChoice());
    playerResylt(answer)
  })

  const btnpaper = document.querySelector('#paper');
  btnpaper.addEventListener('click', (e) => {
    let answer = playRound(e.target.id, getComputerChoice());
    playerResylt(answer)
  })

  const btnscissors = document.querySelector('#scissors');
  btnscissors.addEventListener('click', (e) => {
    let answer = playRound(e.target.id, getComputerChoice());
    playerResylt(answer)
  })
    

    
  