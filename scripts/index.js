
function getComputerChoice() {
    let array = ["Rock", "Paper", "Scissors"];
    let result = array[Math.floor(Math.random() * 3)];
    return result; 
}
function showPopup() {
  const score_comp = document.querySelector('#compScore');
  const score_your = document.querySelector('#yourScore');
    if (score_your.innerHTML == "5") {
      const popupOverlay = document.getElementById("popup-overlay");
      const result = document.getElementById('result');
      result.textContent = "You win this Game!"
      popupOverlay.style.display = "block";
    }
    else if (score_comp.innerHTML == "5") {
      const popupOverlay = document.getElementById("popup-overlay");
      const result = document.getElementById('result');
      result.textContent = "You lose this Game!"
      popupOverlay.style.display = "block";
    };
  }

function playerResylt(reply) {
  showPopup()
    const score_comp = document.querySelector('#compScore');
    const score_your = document.querySelector('#yourScore');
    if (reply == "WIN") {
        const display = document.querySelector('.display');
        const question = display.firstElementChild;
        const answer = document.createElement('h2');

        answer.textContent = 'You win!'

        display.replaceChild(answer, question); 
        score_your.textContent = Number(score_your.innerHTML) + 1 
    }
    else if (reply == "LOSE") {
        const display = document.querySelector('.display');
        const question = display.firstElementChild;
        const answer = document.createElement('h2');

        answer.textContent = 'You lose!'

        display.replaceChild(answer, question); 
        score_comp.textContent = Number(score_comp.innerHTML) + 1 
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
    

    
  