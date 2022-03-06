//score variables
playerScoreGlobal = 0;
compScoreGlobal = 0;

//Makes the computer select a random element
function computerPlay() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

//Checks if the player wins or loses based on the rules.
function rockPaperScissorsGame(playerSelectionGame, computerSelection) {
    
    playerSelectionGame = playerSelectionGame.toLowerCase();

    computerSelection = computerSelection.toLowerCase();

    let win = `You win. ${playerSelectionGame} beats ${computerSelection}`;

    let lose = `You lose. ${computerSelection} beats ${playerSelectionGame}`;

    let nothing = `Nothing happened ${playerSelectionGame} and ${computerSelection} cancel eachother`;

    if(playerSelectionGame == computerSelection) {
        console.log(nothing);
    } else if(playerSelectionGame == "paper" && computerSelection == "rock") {
        playerScoreGlobal++;
        console.log(win);
    } else if(playerSelectionGame == "paper" && computerSelection == "scissors") {
        compScoreGlobal++;
        console.log(lose);
    } else if(playerSelectionGame == "rock" && computerSelection == "scissors") {
        playerScoreGlobal++;
        console.log(win);
    } else if(playerSelectionGame == "rock" && computerSelection == "paper") {
        compScoreGlobal++;
        console.log(lose);
    } else if(playerSelectionGame == "scissors" && computerSelection == "paper") {
        playerScoreGlobal++;
        console.log(win);
    } else if(playerSelectionGame == "scissors" && computerSelection == "rock") {
        compScoreGlobal++;
        console.log(lose);
    }
    return;
}

function game(playerScore, computerScore) {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter Your Selection (Rock, Paper, Scissors):");
        rockPaperScissorsGame(playerSelection, computerPlay());
    }
}

game(playerScoreGlobal, compScoreGlobal);