//getElementbyId is a method--function as an object--startGameBtn has stored object
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';

let gameIsRunning =false; 

const getPlayerChoice = function () {
    const selection = prompt (`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert (`Invalid choice; ${DEFAULT_USER_CHOICE}is default`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};




startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) { 
        return; //if user tries to start game again while it's running, return makes the function stop, can't start it again
    }
    gameIsRunning = true;
    console.log('Game is starting...'); 
    const playerChoice= getPlayerChoice();
    console.log(playerChoice);
}); 


//function as an expression + anonymous function
// const start = function() { //storing a function in a variable, call the const to call the function
//     console.log('Game is starting...');
//};

//startGame(); example of direct execution 

//console.dir(startGame); functions are also objects

//addEventListener is a method- stored in an ojbect
//putting in start as anonymous function bc only used once