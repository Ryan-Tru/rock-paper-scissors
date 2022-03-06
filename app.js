
//Makes the computer select a random element
function computerPlay() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

//Checks if the player wins or loses based on the rules.
function rockPaperScissorsGame(playerSelectionGame, computerSelection, playerScore, compScore) {
    playerSelectionGame = playerSelectionGame.toLowerCase();

    computerSelection = computerSelection.toLowerCase();

    let win = `You win. ${playerSelectionGame} beats ${computerSelection}`;

    let lose = `You lose. ${computerSelection} beats ${playerSelectionGame}`;

    let nothing = `Nothing happened ${playerSelectionGame} and ${computerSelection} cancel eachother`;

    if(playerSelectionGame == computerSelection) {
        return nothing;
    } else if(playerSelectionGame == "paper" && computerSelection == "rock") {
        return win;
    } else if(playerSelectionGame == "paper" && computerSelection == "scissors") {
        return lose;
    } else if(playerSelectionGame == "rock" && computerSelection == "scissors") {
        return win;
    } else if(playerSelectionGame == "rock" && computerSelection == "paper") {
        return lose;
    } else if(playerSelectionGame == "scissors" && computerSelection == "paper") {
        return win;
    } else if(playerSelectionGame == "scissors" && computerSelection == "rock") {
        return lose;
    }
}

//Prompts player to select 
playerSelection = prompt("Enter Your Selection (Rock, Paper, Scissors):");

rockPaperScissorsGame(playerSelection, computerPlay());
