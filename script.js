/* This is the pseudocode of rock paper scissors

    Attempt: This is a commonly game of rock paper scissors.
    Objective: Play against the computer that will be choosing different options.

Function: getComputerChoice takes a number between 1 - 3.
    If: number = 3 return scissors.
    elif: number = 2 return paper.
    elif/else number = 1 return rock.

let number = generate random number between 1-3.
let choice = save the computer choice.

Function: getHumanChoice call function to generate human answer.
    Return: return human choice

let humanChoice = save getHumanChoice result.

let humanScore = save human win score.
let computerScore = save computer win score.

Function: playRound takes two parameters, human choice and computer choice.
    if humanChoice is rock and computer choice is paper.
        computerScore = add 1 to score
        console.log = print in console > paper beats rock, computer wins
    else if humanChoice is rock and computer choice is scissors.
        humanScore = add 1 score
        console.log = print in console > rock beats scissors, human wins
    else if humanChoice is rock and computer choice is rock.
        console.log = print in console > Rock crashes with Rock! It's a draw.
    Repeating with the other choices: scissors and paper.

Function: playGame repeat the game 5 times and choose the winner based in score.


*/
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(number){
    if(number === 3){
        return "scissors";
    }else if(number === 2){
        return "paper";
    }else{
        return "rock";
    }
}

function getHumanChoice(){
    let choice = prompt('please enter "rock", "paper" or "scissors"');
    return choice;    
}

function playRound(computerChoice, humanChoice){

    if(humanChoice.toLowerCase() === "rock"){
        if (computerChoice === "paper"){
            computerScore += 1;
            console.log("Paper beats Rock! Computer wins");
        }else if(computerChoice === "scissors"){
            humanScore +=1;
            console.log("Rock beats scissors! You win");
        }else{
            console.log("Rock crashes with Rock! It's a draw.")
        }
    }

    else if(humanChoice.toLowerCase() === "paper"){
        if (computerChoice === "scissors"){
            computerScore += 1;
            console.log("Scissors beats Paper! Computer wins");
        }else if(computerChoice === "rock"){
            humanScore +=1;
            console.log("Paper beats Rock! You win");
        }else{
            console.log("Paper trash with Paper! It's a draw.")
        }
    }

    else if(humanChoice.toLowerCase() === "scissors"){
        if (computerChoice === "rock"){
            computerScore += 1;
            console.log("Rock beats Scissors! Computer wins");
        }else if(computerChoice === "paper"){
            humanScore +=1;
            console.log("Scissors beats Paper! You win");
        }else{
            console.log("Scissors have not more sharp! It's a draw.")
        }
    }
}

function playGame(){
    let i = 1;
    while(i <= 5){
    let number = Math.floor(Math.random() * 3) + 1;
    let computerChoice = getComputerChoice(number);
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    i++
    }
    console.log(`Your score is ${humanScore}.`)
    console.log(`Computer score is ${computerScore}.`)

    if(humanScore > computerScore){
        console.log("Congratulations! YOU WON!")
    }else{
        console.log("Your effort was not enough :(. You Lose.")
    }
}

playGame()