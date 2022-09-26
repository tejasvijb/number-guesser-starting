let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human_guess,computer_guess,secret_guess) => {
    const compare_human = Math.abs(human_guess - secret_guess)
    const compare_computer = Math.abs(computer_guess - secret_guess)

    if(compare_human < compare_computer){
        return true
    }
    else if(compare_computer < compare_human){
        return false
    }

    return true
}

const updateScore = (str) => {
    if(str == 'human')
        humanScore++;
    else
        computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}
