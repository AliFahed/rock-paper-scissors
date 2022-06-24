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

    console.log(roundResult);
    return roundResult;
  }

  checkRoundWinner(playerSelection, computerSelection);
}

function checkRoundWinner(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "You Win! Scissors beats Rock";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    roundResult = "You Lose! Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    roundResult = "You Lose! Paper beats Rock";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    roundResult = "You Lose! Scissors beats Paper";
  }

  console.log(roundResult);
  return roundResult;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
  }
}

game();