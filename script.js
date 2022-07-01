let playerWins = 0;
let computerWins = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);

function selectRock() {
  let playerSelection = 'rock';

  playRound(playerSelection, computerSelection());
}

function selectPaper() {
  let playerSelection = 'paper';

  playRound(playerSelection, computerSelection());
}

function selectScissors() {
  let playerSelection = 'scissors';

  playRound(playerSelection, computerSelection());
}

function computerSelection() {
  const computerAvailableChoices = ["rock", "paper", "scissors"];
  // computer to choose random value from the array against the player
  let computerSelection = computerAvailableChoices[Math.floor(Math.random() * computerAvailableChoices.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    let roundResult;
    roundResult = "Tie";
    playerWins += 1;
    computerWins += 1;

    console.log(roundResult);
    return roundResult;
  }

  checkRoundWinner(playerSelection, computerSelection);
}

function checkRoundWinner(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "You Win! Rock beats Scissors";
    playerWins += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "You Win! Paper beats Rock";
    playerWins += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "You Win! Scissors beats Rock";
    playerWins += 1;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    roundResult = "You Lose! Rock beats Scissors";
    computerWins += 1;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    roundResult = "You Lose! Paper beats Rock";
    computerWins += 1;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    roundResult = "You Lose! Scissors beats Paper";
    computerWins += 1;
  }

  console.log(roundResult);
  return roundResult;
}

function announceWinner() {
  let allRoudnsWinner;
  if (playerWins === computerWins) {
    allRoudnsWinner = "It's a Tie!";
  } else if (playerWins > computerWins) {
    allRoudnsWinner = "You Won the Game!";
  } else {
    allRoudnsWinner = "You Lost the Game!"
  }

  console.log(allRoudnsWinner);
  return allRoudnsWinner;
}
