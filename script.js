// Rock Paper Scissors game logic

// select all the choice buttons
const images = document.querySelectorAll('img');

// initialize both scores and round number
let playerScore = 0;
let computerScore = 0;
let round = 1;

// initialize placeholders for text and images
let resultPlaceholder = document.querySelector('.result');
let computerCaptionPlaceholder = document.querySelector(".computer-choice-caption");
let computerIconPlaceholder = document.querySelector(".computer-choice-icon");
let playerCaptionPlaceholder = document.querySelector(".player-choice-caption");
let playerIconPlaceholder = document.querySelector(".player-choice-icon");
let roundPlaceholder = document.querySelector('.round-number');
let scorePlaceholder = document.querySelector('.score');

const LAST_ROUND = 5;

// users click on any button calls game() function which contains all the helper functions 
images.forEach((image) => {
    image.addEventListener('click', () => {
        // player's hand choice is the clicked button content
        let playerSelection = image.id;
        // game() takes the players choice (string), and computer's choice, that's why it is called with 
        // computerPlay function as this functions returns a string with computer's choice
        game(playerSelection, computerPlay())
    });
});

function game(playerSelection, computerSelection) {
    displayPlayerHand(playerSelection);
    displayRound(round, LAST_ROUND);
    playRound(playerSelection, computerSelection);
    computerScore = incrementComputerScore(computerScore, round, LAST_ROUND);
    playerScore = incrementPlayerScore(playerScore, round, LAST_ROUND);
    evaluateScore(playerScore, computerScore, LAST_ROUND);
    displayScore(playerScore, computerScore);
    round = advanceRound(result, round);
}

// randomly return a string of either "Rock", "Paper" or "Scissors" - that still needs to happen
// what changes is that we need to display "Computer choice:" in one div and then the icon below
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    let computerChoiceCaption = `<span class="paper-color">Computer choice</span>`
    computerCaptionPlaceholder.innerHTML = computerChoiceCaption;

    computerIconPlaceholder.innerHTML = `<img src="./images/${choice}-icon.png" class="computer-choice-image">`

    return choice;
}

function displayPlayerHand(playerSelection) {
    let playerChoiceCaption = `<span class="paper-color">Player choice</span>`;
    playerCaptionPlaceholder.innerHTML = playerChoiceCaption;

    playerIconPlaceholder.innerHTML = `<img src="./images/${playerSelection}-icon.png" class="player-choice-image">`
}


// given the round number it displays it in the paragraph
// if the round number is more than five it shows the message that the game has finished
function displayRound(round, lastRound) {

    if (round <= lastRound) {
        roundPlaceholder.innerHTML = `<span class="rock-color">Round ${round} of 5</span>`
    } else {
        roundPlaceholder.innerHTML = `<span class="scissors-color">Game Finished, played rounds: 5 of 5</span>`;
    }
}

// compare player hand against the choice of the computer
// returns a string that declares who won the round and why
// displays the result in div .results
function playRound(playerSelection, computerSelection) {

    if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
        result = `<span class="scissors-color">It's a draw</span>`;
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        result = `<span class="scissors-color">You won, paper covers rock</span>`;
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        result = `<span class="scissors-color">You loose, rock breakes scissors</span>`;
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        result = `<span class="scissors-color">You won, scissors cut paper</span>`;
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        result = `<span class="scissors-color">You loose, paper covers rock</span>`;
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        result = `<span class="scissors-color">You won, rock brakes scissors</span>`;
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        result = `<span class="scissors-color">You loose, scissors cut paper</span>`;
    } else {
        result = "Incorrect hand value";
    }
    resultPlaceholder.innerHTML = result;
    return result;
}

// takes computerScore (int) and round (int)
// returns computerScore (int) incremented by one if player has lost
// and the round is not bigger than the last round (the game is still on)
function incrementComputerScore(computerScore, round, lastRound) {
    if (round <= lastRound && result.includes("You loose")) {
        computerScore++;
        return computerScore;
    } else {
        return computerScore;
    }
}

// takes playerScore (int) and round (int)
// returns playerScore (int) incremented by one if player has won
// and the round is not bigger than the last round (the game is still on)
function incrementPlayerScore(playerScore, round, lastRound) {
    if (round <= lastRound && result.includes("You won")) {
        playerScore++;
        return playerScore;
    } else {
        return playerScore;
    }
}

function evaluateScore(playerScore, computerScore, lastRoud) {

    if (round > lastRoud) {
        computerCaptionPlaceholder.innerHTML = "";
        scorePlaceholder.textContent = "";
        computerIconPlaceholder.innerHTML = "";
        playerCaptionPlaceholder.innerHTML = "";
        playerIconPlaceholder.innerHTML = "";
        if (computerScore > playerScore) {
            resultPlaceholder.innerHTML = `<h3><span class="paper-color">You loose the game, refresh the page to play again</span></h3>`;
        } else if (computerScore < playerScore) {
            resultPlaceholder.innerHTML = `<h3><span class="paper-color">You won the game, refresh the page to play again</span></h3>`;
        } else {
            resultPlaceholder.innerHTML = `<h3><span class="paper-color">It's a draw, refresh the page to play again</span></h3>`;
        }
    }
}

// Display both scores in the score div
function displayScore(playerScore, computerScore) {
    scorePlaceholder.innerHTML = `<span class="rock-color">Your score: ${playerScore} 
    Computer score: ${computerScore}</span>`;
}

// If the result is not a draw, increment round
function advanceRound(result, round) {
    if (!result.includes("It's a draw")) {
        round++;
    }
    return round;
}