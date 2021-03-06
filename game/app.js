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

const getPlayerChoice = () => {
    const selection = prompt(
      `${ROCK}, ${PAPER} or ${SCISSORS}?`,
      ''
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
      return;
    }
    return selection;
  };

  const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
      return ROCK;
    } else if (randomValue < 0.67) {
      return PAPER;
    } else {
      return SCISSORS;
    }
  };

//removed function keyword and replaced with keyword arrow function
//added default argument to player choice
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
    // if (cChoice ===pChoice) {
    //     return RESULT_DRAW
    // } else if (cChoice ===ROCK && pChoice ===PAPER || 
    //     cChoice ===SCISSORS && pChoice === ROCK ||
    //     cChoice===PAPER && pChoice === SCISSORS)
    // { return RESULT_PLAYER_WINS}
    // else { return RESULT_COMPUTER_WINS};
 
startGameBtn.addEventListener('click', () => {
if (gameIsRunning) {
    return;}
gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    //test case where in else the playerChoice is undefined
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
       winner=getWinner(computerChoice);
    }
    
    let message; 
    if (winner ===RESULT_DRAW) {
        message= `You picked ${playerChoice ||DEFAULT_USER_CHOICE} and the computer picked ${computerChoice} and you had a draw.`
    } else if (winner===RESULT_PLAYER_WINS) {
        message= `You picked ${playerChoice ||DEFAULT_USER_CHOICE} and the computer picked ${computerChoice} and you win!`
    } else {
        message= `You picked ${playerChoice ||DEFAULT_USER_CHOICE} and the computer picked ${computerChoice} and computer wins :(`
    }
    alert(message);
    gameIsRunning = false;
  });           

//function as an expression + anonymous function
// const start = function() { //storing a function in a variable, call the const to call the function
//     console.log('Game is starting...');
//};

//startGame(); example of direct execution 

//console.dir(startGame); functions are also objects

//addEventListener is a method- stored in an ojbect
//putting in start as anonymous function bc only used once