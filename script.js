let playerWins = 0;
let computerWins = 0;

const selections = document.querySelector('#selections'); // paernt

const playerChoice = document.createElement('div'); // child of selections 
playerChoice.classList.add('playerChoice');
selections.appendChild(playerChoice);

const computerChoice = document.createElement('div'); // child of selections 
computerChoice.classList.add('computerChoice');
selections.appendChild(computerChoice);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);

function selectRock() {
  let playerSelection = 'rock';

  playerChoice.textContent = `You Choose: ${playerSelection}`;
  playRound(playerSelection, computerSelection());
}

function selectPaper() {
  let playerSelection = 'paper';

  playerChoice.textContent = `You Choose: ${playerSelection}`;
  playRound(playerSelection, computerSelection());
}

function selectScissors() {
  let playerSelection = 'scissors';

  playerChoice.textContent = `You Choose: ${playerSelection}`;
  playRound(playerSelection, computerSelection());
}

function computerSelection() {
  const computerAvailableChoices = ["rock", "paper", "scissors"];
  // computer to choose random value from the array against the player
  let computerSelection = computerAvailableChoices[Math.floor(Math.random() * computerAvailableChoices.length)];
  computerChoice.textContent = `Computer Choose: ${computerSelection}`;
  return computerSelection;
}

const container = document.querySelector('#container'); //parent
const result = document.createElement('div'); // child
result.classList.add('result');
container.appendChild(result);

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    let roundResult;
    roundResult = "Tie";
    playerWins += 1;
    computerWins += 1;

    result.textContent = roundResult;
    document.querySelector('.playerScore').textContent = `Your Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Computer Score: ${computerWins}`;
    announceWinner();
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

  result.textContent = roundResult;
  document.querySelector('.playerScore').textContent = `Your Score: ${playerWins}`;
  document.querySelector('.computerScore').textContent = `Computer Score: ${computerWins}`;
  announceWinner();
  return roundResult;
}

function announceWinner() {
  if (playerWins === 5) {
    document.querySelector('#winner').textContent = 'You Won the Game!';
    document.querySelector('#playAgain').style = 'display: block;';
    document.querySelector('#playAgain').textContent = 'Play Again?';
  } else if (computerWins === 5) {
    document.querySelector('#winner').textContent = 'Game Over!';
    document.querySelector('#playAgain').style = 'display: block;';
    document.querySelector('#playAgain').textContent = 'Play Again?';
  } else if (playerWins === 5 && computerWins === 5) {
    document.querySelector('#winner').textContent = "It's a Tie!";
    document.querySelector('#playAgain').style = 'display: block;';
    document.querySelector('#playAgain').textContent = 'Play Again?';
  }
}

const playAgain = document.querySelector('#playAgain');
playAgain.addEventListener('click', resetGame);

function resetGame() {
  playAgain.style = 'display: none;'
  result.textContent = '';
  playerChoice.textContent = '';
  computerChoice.textContent = '';
  document.querySelector('.playerScore').textContent = 'Your Score: 0';
  playerWins = 0;
  document.querySelector('.computerScore').textContent = 'Computer Score: 0';
  computerWins = 0;
  document.querySelector('#winner').textContent = '';
}