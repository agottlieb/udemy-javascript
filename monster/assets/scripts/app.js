//hard-coded value in all caps
const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//function is called by render.js, sets the players' maximum life in the bars
adjustHealthBars(chosenMaxLife); 

function attackHandler () {
   const damage= dealMonsterDamage(ATTACK_VALUE);
   currentMonsterHealth -=damage; //-= means subtracts damage and assigns the outcome as the new value of current monster health
}

attackBtn.addEventListener('click', attackHandler)