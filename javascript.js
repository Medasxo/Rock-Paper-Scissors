function computerPlay(){
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return 'Rock';
    }
    else if(randomNumber == 1){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    let tempString = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + tempString.slice(1);

    if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        return "You lose! Paper beats rock!";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return "You win! Rock beats scissors!";
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        return "You win! Paper beats rock!";
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return "You lose! Scissors beats paper!";
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return "You lose! Rock beats scissors!";
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return "You win! Scissors beats paper!";
    }
    else{
        return "You both chose the same! It's a tie!";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
        playerSelection = prompt("Choose 1: Rock Paper Scissors");
        computerSelection = computerPlay();
        let message = playRound(playerSelection, computerSelection);
        console.log(message);
        if(message.includes("win")){
            playerScore++;
        }
        else if(message.includes("lose")){
            computerScore++;
        }
    if(playerScore > computerScore){
        console.log("Congratulations! You won against the computer.");
    }
    else if(computerScore > playerScore){
        console.log("Unfortunately, you lost :( Good luck next time!");
    }
    else{
        console.log("It's a tie!");
    }

}


const rockBtn = document.querySelector("#Rock");
rockBtn.addEventListener("click", ()=>{
    let computerSelection = computerPlay();
    console.log(playRound('Rock', computerSelection));
}); 

const paperBtn = document.querySelector("#Paper");
paperBtn.addEventListener("click", () =>{
    let computerSelection = computerPlay();
    console.log(playRound('Paper', computerSelection));
});
const scissorsBtn = document.querySelector("#Scissors");
scissorsBtn.addEventListener("click", () => {
    let computerSelection = computerPlay();
    console.log(playRound('Scissors', computerSelection));
});

