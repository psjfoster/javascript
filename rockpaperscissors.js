/* rockpaperscissors.js */

const options = [
  "rock",
  "paper", 
  "scissors",
  "rock" // appears twice to aid calculating the winner
];

let playerChoice;
let computerChoice;

// player chooses first so you can't cheat with a console log!
playerChoice = playerChoose();
// console.log(playerChoice + "(" + options.indexOf(playerChoice) + ")");

computerChoice = computerChoose();
// console.log(computerChoice + "(" + options.lastIndexOf(computerChoice) + ")");

alertResult(playerChoice, computerChoice);

function playerChoose() {
  let playMessage = "Choose \"" + options[0] +"\"," + 
    "\"" + options[1] + "\" or \"" + options[2] + "\":"

  playerChoice = prompt(playMessage);

  // repeat until valid, unless cancelled
  while (!(options.includes(playerChoice))) {

    if (playerChoice != null) {
      playerChoice = prompt("Try again! Or click \"Cancel\" to exit.\n\n" +
        playMessage);
      playerChoice = playerChoice.toLowerCase();
      
    } else {
      alert("Sorry to bother you!");
      break;
    }
  }

  return playerChoice;
}

function computerChoose() {
  return options[Math.floor(Math.random() * 3) + 1];
}

function alertResult(player1, player2) {
  if (player1 == player2) {
    alert("You draw! You both chose \"" + player1 + "\"!");

  } else {
    let player1Score = options.indexOf(player1);
    let player2Score;

    if (player1 == options[1]) {
      player2Score = options.indexOf(player2);
    } else {
      player2Score = options.lastIndexOf(player2);
    }

    let capitalisePlayer1 = player1.charAt(0).toUpperCase();
    player1 = capitalisePlayer1 + player1.substr(1);
    
    if (player1Score > player2Score) {
      alert("You win! \"" + player1 + "\" beats \"" + player2 + "\"!");
    } else {
      alert("You lose! \"" + player1 + "\" loses to \"" + player2 + "\"!");
    }
  }
}

// playARound(playerSelection, computerSelection)
// playerSelection to be case-insensitive
// return a string saying "You win!" or "You lose!" "Rock beats paper" or sim.