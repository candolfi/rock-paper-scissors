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
        question = reAsk();
    }

    return (question.toLowerCase());
}

function reAsk() {
    let question = prompt("Not valid. Please enter rock, paper or scissors");
    if(question.toLowerCase() != "rock" && question.toLowerCase() != "paper" && question.toLowerCase() != "scissors"){
        question = reAsk();
    }
}

function calculateWinner(computer, player) {
    if(player === "rock") {
        if(computer === "rock") {
            alert("It is a tie!");
        }
        else if(computer === "paper") {
            alert("Computer wins! Paper beats Rock");
        }
        else {
            alert("You win! Rock beats Scissors");
        }
    }

    else if(player === "paper") {
        if(computer === "paper") {
            alert("It is a tie!");
        }
        else if(computer === "scissors") {
            alert("Computer wins! Scissors beat Paper");
        }
        else {
            alert("You win! Paper beats Rock");
        }
    }

    else {
        if(computer === "scissors") {
            alert("It is a tie!");
        }
        else if(computer === "rock") {
            alert("Computer wins! Rock beats Scissors");
        }
        else {
            alert("You win! Scissors beat Paper");
        }
    }
}

function rockPaperScissors(){
    calculateWinner(getComputerChoice(), getPlayerChoice())
}