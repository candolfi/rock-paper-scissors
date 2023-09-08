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

function getPlayerChoice(selection){
    console.log(selection.target.id);
    return (selection.target.id);
}

    function calculateWinner(computer, player) {
        let winner = 0;
        if(player === "rock") {
            if(computer === "rock") {
                alert("It is a tie!");
                return (winner = 0);
            }
            else if(computer === "paper") {
                alert("Computer wins! Paper beats Rock");
                return (winner = -1);
            }
            else {
                alert("You win! Rock beats Scissors");
                return (winner = 1);
            }
        }

        else if(player === "paper") {
            if(computer === "paper") {
                alert("It is a tie!");
                return (winner = 0);
            }
            else if(computer === "scissors") {
                alert("Computer wins! Scissors beat Paper");
                return (winner = -1);
            }
            else {
                alert("You win! Paper beats Rock");
                return (winner = 1);
            }
        }

        else {
            if(computer === "scissors") {
                alert("It is a tie!");
                return (winner = 0);
            }
            else if(computer === "rock") {
                alert("Computer wins! Rock beats Scissors");
                return (winner = -1);
            }
            else {
                alert("You win! Scissors beat Paper");
                return (winner = 1);
            }
        }
    }

function rockPaperScissors(){
    return calculateWinner(getComputerChoice(), getPlayerChoice())
}

function game() {
    let score = 0;

    for(i = 0; i < 5; i++) {
        score = score + rockPaperScissors();
    }

    if(score > 0) {
        alert("You've Won");
    }
    else if(score < 0) {
        alert("The computer wins! Better luck next time");
    }
    else {
        alert("It's a tie!")
    }
}