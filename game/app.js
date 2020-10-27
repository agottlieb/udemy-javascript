//getElementbyId is a method--function as an object--startGameBtn has stored object
const startGameBtn = document.getElementById('start-game-btn');

//function as an expression + anonymous function
// const start = function() { //storing a function in a variable, call the const to call the function
//     console.log('Game is starting...');
//};

//startGame(); example of direct execution 

//console.dir(startGame); functions are also objects

//addEventListener is a method- stored in an ojbect
//putting in start as anonymous function bc only used once
startGameBtn.addEventListener('click', function () {
    console.log('Game is starting...');
}); 