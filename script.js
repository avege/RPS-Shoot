'use strict';

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (randomNumber >= 1 && randomNumber <= 3) {
        return 'Rock';
    } else if (randomNumber >= 4 && randomNumber <= 6){
        return 'Paper';
    } else {
        return 'Scissors';
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
        return 'It\'s a tie!';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats rock!'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats scissors!'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats rock!'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats paper!'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats scissors!'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats paper!'
    } else {
        return 'Please choose rock, paper, or scissors'
    }

}

// function game() {
//     playerSelection = prompt('Rock! Paper! Scissors!', 'Shoot!!!');
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
// }


const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));