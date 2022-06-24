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

  if (playerSelection === "scissors" || computerSelection === "scissors") {
    scissorsCases(playerSelection, computerSelection);
  } else if (playerSelection === "rock" || computerSelection === "rock") {
    rockCases(playerSelection, computerSelection);
  } else if (playerSelection === "paper" || computerSelection === "paper") {
    paperCases(playerSelection, computerSelection);
  }
}

function scissorsCases(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundResult = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "You Win! Rock beats Scissors"; 
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundResult = "You Lose! Rock beats Scissors"
  }

  console.log(roundResult);
  return roundResult;
}

function rockCases(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "You Win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    roundResult = "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "You Win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundResult = "You Lose! Paper beats Rock";
  }

  console.log(roundResult);
  return roundResult;
}

function paperCases(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "You Win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundResult = "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundResult = "You Lose! Scissors beats Paper";
  }

  console.log(roundResult);
  return roundResult;
}

playRound(playerSelection(), computerSelection());