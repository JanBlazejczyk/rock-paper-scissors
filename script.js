// Rock Paper Scissors game logic

// select all the buttons
const buttons = document.querySelectorAll('button');

// initialize both scores and round number
let playerScore = 0;
let computerScore = 0;
let round = 1;

// After the user clicks on any button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // player selction is the button content
        let playerSelection = button.textContent.toUpperCase();

        displayRound(round);
        game(playerSelection, computerPlay())

        // the round number is displayed in the round number p tag
        if (!result.startsWith("It's a draw")) {
            round++;
        }
    });
});

// given the round number it displays it in the paragraph
// if the round number is more than five it shows the message that the game has finished
function displayRound(round) {
    let placeholder = document.querySelector('p');

    if (round <= 5) {
        placeholder.textContent = `Round ${round} of 5`;
    } else {
        placeholder.textContent = `Game Finished, played rounds: 5 of 5`;
    }
}

function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);
    // Score is incremented and displayed
    if (round <= 5 && result.startsWith("You won")) {
        playerScore += 1;
    } else if (round <= 5 && result.startsWith("You loose")) {
        computerScore += 1;
    }
    console.log(playerScore);
    console.log(computerScore);
    evaluateScore(playerScore, computerScore);
    displayScore(playerScore, computerScore);
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

function evaluateScore(playerScore, computerScore) {
    let messagePlaceholder = document.querySelector('.message');
    let resultPlaceholder = document.querySelector('.result');
    let scorePlaceholder = document.querySelector('.score');

    if (round > 5) {
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
    let displayResult = document.querySelector(".score");
    displayResult.textContent = `Your score: ${playerScore} 
                                Computer score: ${computerScore}`
}

// compare player hand against the choice of the computer
// returns a string that declares who won the round and why
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
        result = "It's a draw";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        result = "You won, paper covers rock";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        result = "You loose, rock breakes scissors";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        result = "You won, scissors cut paper";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        result = "You loose, paper covers rock";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        result = "You won, rock brakes scissors";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        result = "You loose, scissors cut paper";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    } else {
        result = "Incorrect hand value";
        placeholder = document.querySelector('.result');
        placeholder.textContent = result;
        return result;
    }
}

