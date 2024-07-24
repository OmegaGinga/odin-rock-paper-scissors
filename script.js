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
const WINNING_SCORE = 5;
const choice1 = document.querySelector('.Human-Choice');
const choice2 = document.querySelector('.Computer-Choice');
const score1 = document.querySelector('.Human-Score');
const score2 = document.querySelector('.Computer-Score');
const winner = document.querySelector('.Winner');
const res = document.querySelector('.reset');
const choice1r = 'Human Choice: ';
const choice2r = 'Computer Choice: ';
const score1r = 'Human Score: ';
const score2r = 'Computer Score: ';

const body = document.querySelector('body');

function getComputerChoice() {
    let random_number = Math.floor(Math.random() * 3 + 1);
    switch (random_number) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll('.buttons-container button');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                let target = event.target;
                let choice;
                switch (target.className) {
                    case 'Rock':
                        choice = 'Rock';
                        break;
                    case 'Paper':
                        choice = 'Paper';
                        break;
                    case 'Scissors':
                        choice = 'Scissors';
                        break;
                    default:
                        choice = 'Unknown';
                }
                resolve(choice);
            }, { once: true }); // Ensure the event listener is only triggered once
        });
    });
}

function updateDisplay(humanChoice, computerChoice) {
    choice1.textContent = choice1r;
    choice2.textContent = choice2r;
    score1.textContent = score1r;
    score2.textContent = score2r;

    choice1.textContent += humanChoice;
    choice2.textContent += computerChoice;
    score1.textContent += humanScore;
    score2.textContent += computerScore;
}

function playRound() {
    return getHumanChoice().then(humanChoice => {
        let computerChoice = getComputerChoice();
        console.log(`Player choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            winner.textContent = 'Draw!';
        } else if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            winner.textContent = 'Player Wins!';
            humanScore++;
        } else {
            winner.textContent = 'Computer Wins!';
            computerScore++;
        }

        updateDisplay(humanChoice, computerChoice);

        if (humanScore >= WINNING_SCORE) {
            let the_winner = document.createElement('p');
            the_winner.textContent = 'Player wins the game!';
            body.appendChild(the_winner);
            return true;
        } else if (computerScore >= WINNING_SCORE) {
            let the_winner = document.createElement('p');
            the_winner.textContent = 'Computer wins the game :(';
            body.appendChild(the_winner);
            return true;
        }
        return false;
    });
}

async function playGame() {
    while(humanScore != WINNING_SCORE || computerScore != WINNING_SCORE){
        const gameEnded = await playRound();
        if (gameEnded) break;
    }
}

const play = document.querySelector('.Play');
play.addEventListener('click', () => {
    playGame();
    play.remove();
});
res.addEventListener('click', ()=>{
    window.location.reload();
})
