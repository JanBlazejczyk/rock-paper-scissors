// Rock Paper Scissors game logic

// select all the choice buttons
const images = document.querySelectorAll('img');

// initialize both scores and round number
let playerScore = 0;
let computerScore = 0;
let round = 1;

const LAST_ROUND = 5;

// users click on any button calls game() function which contains all the helper functions 
images.forEach((image) => {
    image.addEventListener('click', () => {
        // player's hand choice is the clicked button content
        let playerSelection = image.id.toUpperCase();
        // game() takes the players choice (string), and computer's choice, that's why it is called with 
        // computerPlay function as this functions returns a string with computer's choice
        game(playerSelection, computerPlay())
    });
});

function game(playerSelection, computerSelection) {
    displayRound(round, LAST_ROUND);
    playRound(playerSelection, computerSelection);
    computerScore = incrementComputerScore(computerScore, round, LAST_ROUND);
    playerScore = incrementPlayerScore(playerScore, round, LAST_ROUND);
    evaluateScore(playerScore, computerScore, LAST_ROUND);
    displayScore(playerScore, computerScore);
    round = advanceRound(result, round);
}

// randomly return a string of either "Rock", "Paper" or "Scissors"
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    let messageAboutComputerChoice = `Computer choose: ${choice}`
    let placeholder = document.querySelector(".message");
    placeholder.textContent = messageAboutComputerChoice;
    return choice;
}


// given the round number it displays it in the paragraph
// if the round number is more than five it shows the message that the game has finished
function displayRound(round, lastRound) {
    let placeholder = document.querySelector('.round-number');

    if (round <= lastRound) {
        placeholder.innerHTML = `<span class="rock-color">Round ${round} of 5</span>`
    } else {
        placeholder.innerHTML = `<span class="scissors-color">Game Finished, played rounds: 5 of 5</span>`;
    }
}

// compare player hand against the choice of the computer
// returns a string that declares who won the round and why
// displays the result in div .results
function playRound(playerSelection, computerSelection) {
    placeholder = document.querySelector('.result');

    if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
        result = "It's a draw";
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        result = "You won, paper covers rock";
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        result = "You loose, rock breakes scissors";
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        result = "You won, scissors cut paper";
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        result = "You loose, paper covers rock";
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        result = "You won, rock brakes scissors";
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        result = "You loose, scissors cut paper";
    } else {
        result = "Incorrect hand value";
    }
    placeholder.textContent = result;
    return result;
}

// takes computerScore (int) and round (int)
// returns computerScore (int) incremented by one if player has lost
// and the round is not bigger than the last round (the game is still on)
function incrementComputerScore(computerScore, round, lastRound) {
    if (round <= lastRound && result.startsWith("You loose")) {
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
    if (round <= lastRound && result.startsWith("You won")) {
        playerScore++;
        return playerScore;
    } else {
        return playerScore;
    }
}

function evaluateScore(playerScore, computerScore, lastRoud) {
    let messagePlaceholder = document.querySelector('.message');
    let resultPlaceholder = document.querySelector('.result');
    let scorePlaceholder = document.querySelector('.score');

    if (round > lastRoud) {
        messagePlaceholder.textContent = "";
        scorePlaceholder.textContent = "";
        if (computerScore > playerScore) {
            resultPlaceholder.textContent = `You loose the game, refresh the page to play again`;
        } else if (computerScore < playerScore) {
            resultPlaceholder.textContent = `You won the game, refresh the page to play again`;
        } else {
            resultPlaceholder.textContent = `It's a draw, refresh the page to play again`;
        }
    }
}

// Display both scores in the score div
function displayScore(playerScore, computerScore) {
    let placeholder = document.querySelector(".score");
    placeholder.textContent = `Your score: ${playerScore} 
    Computer score: ${computerScore}`
}

// If the result is not a draw, increment round
function advanceRound(result, round) {
    if (!result.startsWith("It's a draw")) {
        round++;
    }
    return round;
}

