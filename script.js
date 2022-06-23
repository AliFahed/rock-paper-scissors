// Player Selection
function playerSelection() {
  // ask the user for input
  let playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'");
  // check user input
  if (playerSelection === "rock" || playerSelection === "Rock" ||
  playerSelection === "ROCK") {
    // assign playerSelection to lowercase "rock"
    playerSelection = "rock";
    // return the value of playerSelection
    console.log(playerSelection);
  } else if (playerSelection === "paper" || playerSelection === "Paper" ||
  playerSelection === "PAPER") {
    playerSelection = "paper";
    console.log(playerSelection);
  } else if (playerSelection === "scissors" || playerSelection === "Scissors" ||
  playerSelection === "SCISSORS") {
    playerSelection = "scissors";
    console.log(playerSelection);
  } else {
    alert("Invalid input, Please try again!");
  }
}

// call playerSelection function
playerSelection();