let playerWins = 0;
let computerWins = 0;

function playerSelection() {
  let playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'");
  // player input should be case insensitive
  if (playerSelection === "rock" || playerSelection === "Rock" ||
  playerSelection === "ROCK") {
    // assign playerSelection to lowercase to avoid comparing multiple times
    playerSelection = "rock";
  } else if (playerSelection === "paper" || playerSelection === "Paper" ||
  playerSelection === "PAPER") {
    playerSelection = "paper";
  } else if (playerSelection === "scissors" || playerSelection === "Scissors" ||
  playerSelection === "SCISSORS") {
    playerSelection = "scissors";
  } else {
    alert("Invalid input, Please try again!");
  }
  return playerSelection;
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

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
  }
  
  announceWinner();
}

game();