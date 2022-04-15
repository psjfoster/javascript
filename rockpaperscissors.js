/* rockpaperscissors.js */

const options = [
  "rock",
  "paper", 
  "scissors",
  "rock" // appears twice to aid calculating the winner
];

// player chooses first so you can't cheat with a console log!
let playerChoice;
let computerChoice;

let playerWins;
let computerWins;

playTheGame();

function playTheGame() {
  for (playerWins = 0, computerWins = 0;
       playerWins < 3 && computerWins < 3;) {

         playerChoose();
         computerChoose();
         
         alertResult(playerChoice, computerChoice);

         if (playerWins > computerWins) {
           alert("You are winning by " + playerWins + " rounds to " + computerWins + "!");
         } else if (computerWins > playerWins) {
           alert("You are currently behind, " + computerWins + " rounds to " + playerWins + ".");
         } else {
           alert("You are both tied at " + playerWins + " rounds each.")
         }
       }
}

function playerChoose() {
  let playMessage = "Choose \"" + options[0] +"\"," + 
    "\"" + options[1] + "\" or \"" + options[2] + "\":"

    playerChoice = prompt(playMessage);

  // repeat until valid, unless cancelled
  while (!(options.includes(playerChoice))) {

    if (playerChoice != null) {
      playerChoice = prompt("Try again!\n\n" +
        playMessage);
      playerChoice = playerChoice.toLowerCase();
    }
  }
}

function computerChoose() {
  computerChoice = options[Math.floor(Math.random() * 3) + 1];
}

function alertResult(player1, player2) {
  if (player1 == player2) {
    alert("You draw! You both chose \"" + player1 + "\"!");

  } else {
    let player1Score = options.indexOf(player1);
    let player2Score;

    // if player chooses paper, we use rock low, otherwise rock high
    if (player1 == options[1]) {
      player2Score = options.indexOf(player2);
    } else {
      player2Score = options.lastIndexOf(player2);
    }

    let capitalisePlayer1 = player1.charAt(0).toUpperCase();
    player1 = capitalisePlayer1 + player1.substr(1);
    
    if (player1Score > player2Score) {
      alert("You win! \"" + player1 + "\" beats \"" + player2 + "\"!");
      playerWins++;

    } else {
      alert("You lose! \"" + player1 + "\" loses to \"" + player2 + "\"!");
      computerWins++;
    }
  }
}

// playARound(playerSelection, computerSelection)
// playerSelection to be case-insensitive
// return a string saying "You win!" or "You lose!" "Rock beats paper" or sim.