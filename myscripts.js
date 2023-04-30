function getComputerChoice () {
    array = ["Rock", "Paper", "Scissors"];
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
        return array[0];
        //console.log(array[0]);
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "Tie! Equal selection by both player and computer";
    }   else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    }   else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }   else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }   else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Rock loses to Paper";
    }   else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Paper loses to Scissors";
    }   else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Scissors loses to Rock";
    }
}

function game () {

    let playerSelection;
    let computerSelection;
    let gameResult;
    let roundResult;
    let games = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < games + 1; i++) {

        let playerInput = prompt("Enter your choice");

        playerInput = playerInput.charAt(0).toUpperCase() +     playerInput.slice(1).toLowerCase();

        if (playerInput == "Rock" || playerInput == "Paper" || playerInput == "Scissors") {
            playerSelection = playerInput;
        }   else {
            alert("Please enter 'Rock' 'Paper' or 'Scissors'");
            playerInput = prompt("Enter your choice");

            playerInput = playerInput.charAt(0).toUpperCase() +     playerInput.slice(1).toLowerCase();

            playerSelection = playerInput;
        }

        getComputerChoice();
        computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection).search("Win") > 0) {
            playerScore++;

        }   else if (playRound(playerSelection, computerSelection).search("Lose") > 0) {
                computerScore++;

        }   console.log(playRound(playerSelection, computerSelection));
    }
        if (playerScore > computerScore) {
        gameResult = "You win the game!";
    }   else if (computerScore > playerScore) {
        gameResult = "Computer wins the game!";
    }   else {
        gameResult = "Tie game!";
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    document.getElementById("game").innerHTML = gameResult;
}

//game();
