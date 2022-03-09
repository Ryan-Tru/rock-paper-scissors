//score variables
playerScoreGlobal = 0;
compScoreGlobal = 0;

//declaring button variables
const selectBtn = document.querySelectorAll('[data-selection]');

//declaring shape box variables
const playerShapeBox = document.querySelector('.player-shape-box');
const compShapeBox = document.querySelector('.comp-shape-box');
const playerShape = document.querySelector('.player-shape');
const compShape = document.querySelector('.comp-shape');

//declaring win loss message variables
const winLoss = document.querySelector('.win-loss-container');
const winLossMessage = document.querySelector('.win-loss-message');

//global shape choice variable
let playerChoice;
let compChoice;

//declaring score variables
const playerScoreContainer = document.querySelector('.player-score-container');
const compScoreContainer = document.querySelector('.comp-score-container');
const playerScoreCounter = document.querySelector('.player-score');
const compScoreCounter = document.querySelector('.comp-score');

let message;

let body = document.querySelector('body');


//checks for player input, then runs the functions
outerFunction:
function handleClick() {
    selectBtn.forEach(selectBtn => {
        selectBtn.addEventListener('click', (e) => {
            playerChoice = selectBtn.dataset.selection;
            switch(playerChoice) {
                case "rock":
                    playerShape.innerHTML = "<i class=\"fa-solid fa-hand-back-fist\"></i>";
                    playerShapeBox.append(playerShape);
                    break;
                case "paper":
                    playerShape.innerHTML = "<i class=\"fa-solid fa-hand\"></i>";
                    playerShapeBox.append(playerShape);
                    break;
                case "scissors":
                    playerShape.innerHTML = "<i class=\"fa-solid fa-hand-scissors\"></i>";
                    playerShapeBox.append(playerShape);
                    break;
            }
            compPlay();
            rockPaperScissorsGame(playerChoice, compChoice);
            winLossFunc();
            scoreCounter(playerScoreGlobal, compScoreGlobal);
            isGameOver();
            if(isGameOver() == true) {
                setTimeout(function(){
                    window.location.reload(1);
                }, 3000);
            }
        })
    });
}

//displays win or loss message
function winLossFunc() {
    winLossMessage.textContent = message;
    winLoss.append(winLossMessage);
}

//Makes the computer select a random element
function compPlay() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    
    compChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

    switch(compChoice) {
        case "rock":
            compShape.innerHTML = "<i class=\"fa-solid fa-hand-back-fist\"></i>";
            compShapeBox.append(compShape);
            break;
        case "paper":
            compShape.innerHTML = "<i class=\"fa-solid fa-hand\"></i>";
            compShapeBox.append(compShape);
            break;
        case "scissors":
            compShape.innerHTML = "<i class=\"fa-solid fa-hand-scissors\"></i>";
            compShapeBox.append(compShape);
            break;
    }

    return compChoice;
}

//Checks if the player wins or loses based on the rules.
function rockPaperScissorsGame(playerSelectionGame, compSelection) {

    let win = `Yay! You won :) ${playerSelectionGame} beats ${compSelection}`;

    let lose = `You lost :( ${compSelection} beats ${playerSelectionGame}`;

    let nothing = `Nothing happened ${playerSelectionGame} and ${compSelection} cancel eachother`;

    if(playerSelectionGame == compSelection) {
        message = nothing;
    } else if(playerSelectionGame == "paper" && compSelection == "rock") {
        playerScoreGlobal++;
        message = win;
    } else if(playerSelectionGame == "paper" && compSelection == "scissors") {
        compScoreGlobal++;
        message = lose;
    } else if(playerSelectionGame == "rock" && compSelection == "scissors") {
        playerScoreGlobal++;
        message = win;
    } else if(playerSelectionGame == "rock" && compSelection == "paper") {
        compScoreGlobal++;
        message = lose;
    } else if(playerSelectionGame == "scissors" && compSelection == "paper") {
        playerScoreGlobal++;
        message = win;
    } else if(playerSelectionGame == "scissors" && compSelection == "rock") {
        compScoreGlobal++;
        message = lose;
    }
}

function scoreCounter(playerScore, compScore) {
    playerScoreCounter.textContent = playerScore;
    compScoreCounter.textContent = compScore;

    playerScoreContainer.append(playerScoreCounter);
    compScoreContainer.append(compScoreCounter);
}

function isGameOver() {
    if(playerScoreGlobal === 5) {
        winLossMessage.textContent = "YOU WON!!!!!!!!!!! site will now reload";
        winLoss.append(winLossMessage);
        return true;
    } else if (compScoreGlobal === 5) {
        winLossMessage.textContent = "YOU LOST :( site will now reload";
        winLoss.append(winLossMessage);
        return true;
    }
}

handleClick();