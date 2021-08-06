// Rock Paper Scissors game functions

// randomly return a string of either "Rock", "Paper" or "Scissors"
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

// Display both scores
function displayScore(playerScore, computerScore) {
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

// compare player hand against the choice of the computer
// returns a string that declares who won the round and why
function playRound(playerSelection, computerSelection) {
    let messageAboutComputerChoice = `Computer choose: ${computerSelection}`
    let displayMessage = document.querySelector(".message")
    displayMessage.textContent = messageAboutComputerChoice;


    if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
        result = "It's a draw";
        return result;
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        result = "You won, paper covers rock";
        return result;
    } else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        result = "You loose, rock breakes scissors"
        return result;
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        result = "You won, scissors cut paper";
        return result;
    } else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        result = "You loose, paper covers rock";
        return result;
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        result = "You won, rock brakes scissors";
        return result
    } else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        result = "You loose, scissors cut paper";
        return result;
    } else {
        result = "Incorrect hand value";
        return result;
    }
}

// plays a game of five rounds, keeps score and reports who won at the end
function game() {
    computerScore = 0
    playerScore = 0
    for (round = 1; round <= 5; round++) {
        playersHand = prompt("Choose your hand:", "Rock, Paper or Scissors");
        console.log(`Round ${round} of 5`)
        playRound(playersHand, computerPlay());
        console.log(result);

        if (result.startsWith("You won")) {
            playerScore += 1;
        } else if (result.startsWith("You loose")) {
            computerScore += 1;
        } else if (result.startsWith("Incorrect")) {
            round -= 1
        }
        displayScore(playerScore, computerScore);
    }
    if (computerScore > playerScore) {
        console.log("You loose the game, refresh the page to play again");
    } else if (computerScore < playerScore) {
        console.log("You won the game, refresh the page to play again");
    } else {
        console.log("It's a draw, refresh the page to play again");
    }
}


// we take all the buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.textContent.toUpperCase();


        let displayResult = document.querySelector(".result");
        displayResult.textContent = playRound(playerSelection, computerPlay());
    })
})

// change all of your console.logs into DOM methods to be displayed in the .results


