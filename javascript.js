let message = '';
let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'Rock';
    }
    else if (randomNumber == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    let tempString = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + tempString.slice(1);

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You win! Paper beats rock!";
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return "You lose! Scissors beats paper!";
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return "You lose! Rock beats scissors!";
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You win! Scissors beats paper!";
    }
    else {
        return "You both chose the same! It's a tie!";
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    const resTab = document.querySelector("#Result");
    let result;
    result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
    resTab.textContent = result;
    if (playerScore > computerScore) {
        console.log("Congratulations! You won against the computer.");
    }
    else if (computerScore > playerScore) {
        console.log("Unfortunately, you lost :( Good luck next time!");
    }

}



const rockBtn = document.querySelector("#Rock");
rockBtn.addEventListener("click", () => {
    let computerSelection = computerPlay();
    message = playRound('Rock', computerSelection);
    const currentWinner = document.querySelector("#Choose");
    currentWinner.textContent = message;

    const resTab = document.querySelector("#Result");
    if (message.includes('win') == true) {
        playerScore++;
    }
    else if (message.includes('lose') == true) {
        computerScore++;
    }
    result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
    resTab.textContent = result; 
    if(playerScore == 5){
        alert("YOU HAVE WON AN ENTIRE GAME AGAINST A COMPUTER!");
        playerScore = 0;
        computerScore = 0;
        result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
        resTab.textContent = result; 
    }
    else if(computerScore === 5){
        alert("Sorry to say this, but you have lost against a computer :(");
        playerScore = 0;
        computerScore = 0;
        result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
        resTab.textContent = result; 
    }
});

const paperBtn = document.querySelector("#Paper");
paperBtn.addEventListener("click", () => {
    let computerSelection = computerPlay();
    message = playRound('Paper', computerSelection);
    const currentWinner = document.querySelector("#Choose");
    currentWinner.textContent = message;

    const resTab = document.querySelector("#Result");
    if (message.includes('win') == true) {
        playerScore++;
    }
    else if (message.includes('lose') == true) {
        computerScore++;
    }
    result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
    resTab.textContent = result; 
    if(playerScore == 5){
        alert("YOU HAVE WON AN ENTIRE GAME AGAINST A COMPUTER!");
        playerScore = 0;
        computerScore = 0;
        result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
        resTab.textContent = result; 
    }
    else if(computerScore === 5){
        alert("Sorry to say this, but you have lost against a computer :(");
        playerScore = 0;
        computerScore = 0;
        result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
        resTab.textContent = result; 
    }
});
const scissorsBtn = document.querySelector("#Scissors");
scissorsBtn.addEventListener("click", () => {
    let computerSelection = computerPlay();
    message = playRound('Scissors', computerSelection);
    const currentWinner = document.querySelector("#Choose");
    currentWinner.textContent = message;

    const resTab = document.querySelector("#Result");
    if (message.includes('win') == true) {
        playerScore++;
    }
    else if (message.includes('lose') == true) {
        computerScore++;
    }
    result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
    resTab.textContent = result; 
    if(playerScore == 5){
        alert("YOU HAVE WON AN ENTIRE GAME AGAINST A COMPUTER!");
        playerScore = 0;
        computerScore = 0;
        result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
        resTab.textContent = result; 
    }
    else if(computerScore === 5){
        alert("Sorry to say this, but you have lost against a computer :(");
        playerScore = 0;
        computerScore = 0;
        result = "YOU: " + playerScore.toString() + " COMPUTER: " + computerScore.toString();
        resTab.textContent = result; 
    }
});

const startBtn = document.querySelector("#Start");
startBtn.addEventListener("click", () => {
    game();
});

