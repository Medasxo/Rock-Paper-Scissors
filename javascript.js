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
        return "You Lose! Paper beats rock!";
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
/** 
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
*/