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
  console.log(`Player selected ${playerSelection} while computer selected ${computerSelection}.`);
}

playRound(playerSelection(), computerSelection());