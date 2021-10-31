'use strict';

//computer decides which to throw based on random numbers
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
    playerSelection = prompt('rps');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'Rock' || playerSelection === 'paper' && computerSelection === 'Paper' || playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats scissors!'
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats scissors!'
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats paper!'
    } else {
        return 'Please choose rock, paper, or scissors'
    }

}

const playerSelection = '';//won't prompt if not here
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
function game() {
   
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    
}
game();
