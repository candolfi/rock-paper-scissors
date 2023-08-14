function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3 + 1);
    let computerChoice = 0;

    if(randomInt === 1){
        return (computerChoice = "rock")
    }
    else if(randomInt === 2){
        return (computerChoice = "paper")
    }
    else {
        return (computerChoice = "scissors")
    }
}

function getPlayerChoice() {
    let question = prompt("Please enter rock, paper or scissors");

    if(question.toLowerCase() != "rock" && question.toLowerCase() != "paper" && question.toLowerCase() != "scissors"){
        
    }
}

function ask() {
    let question = prompt("Please enter rock, paper or scissors");
}