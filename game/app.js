//getElementbyId is a method--function as an object--startGameBtn has stored object
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'; 

let gameIsRunning =false; 

const getPlayerChoice = function () {
    const selection = prompt (`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert (`Invalid choice; ${DEFAULT_USER_CHOICE} is default`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK
    } else if 
        (randomValue < 0.67) {
        return PAPER
        }
    else {return SCISSORS}
};

const getWinner = function (cChoice, pChoice ) {
    if (cChoice ===pChoice) {
        return RESULT_DRAW
    } else if (cChoice ===ROCK && pChoice ===PAPER || 
        cChoice ===SCISSORS && pChoice === ROCK ||
        cChoice===PAPER && pChoice === SCISSORS)
    { return RESULT_PLAYER_WINS}
    else { return RESULT_COMPUTER_WINS};
} 

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) { 
        return; //if user tries to start game again while it's running, return makes the function stop, can't start it again
    }
    gameIsRunning = true;
    console.log('Game is starting...'); 
    const playerChoice= getPlayerChoice();
    const computerChoice = getPlayerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
 
}); 


//function as an expression + anonymous function
// const start = function() { //storing a function in a variable, call the const to call the function
//     console.log('Game is starting...');
//};

//startGame(); example of direct execution 

//console.dir(startGame); functions are also objects

//addEventListener is a method- stored in an ojbect
//putting in start as anonymous function bc only used once