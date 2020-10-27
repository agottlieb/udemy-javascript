//getElementbyId is a method--function as an object--startGameBtn has stored object
const startGameBtn = document.getElementById('start-game-btn');

function startGame () {
    console.log('Game is starting...');
}

//startGame(); example of direct execution 

//console.dir(startGame); functions are also objects

startGameBtn.addEventListener('click', startGame); //addEventListener is a method- stored in an ojbect