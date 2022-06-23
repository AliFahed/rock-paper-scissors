// Player Selection
function playerSelection() {
  // ask the user for input
  let playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'");
  // check user input
  if (playerSelection === "rock" || playerSelection === "Rock" ||
  playerSelection === "ROCK") {
    // assign playerSelection to lowercase "rock"
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
  // console.log(playerSelection);
  return playerSelection;
}

// Computer Selection
function computerSelection() {
  // storing computer available choices inside an array
  const computerAvailableChoices = ["rock", "paper", "scissors"];
  // choosing one random value from the array
  let computerSelection = computerAvailableChoices[Math.floor(Math.random() * computerAvailableChoices.length)];
  // console.log(computerSelection);
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player selected ${playerSelection} while computer selected ${computerSelection}.`);
}

// call function
playRound(playerSelection(), computerSelection());