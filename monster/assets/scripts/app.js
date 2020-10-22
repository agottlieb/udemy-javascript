//hard-coded value in all caps
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE=14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//function is called by render.js, sets the players' maximum life in the bars
adjustHealthBars(chosenMaxLife); 

function attackHandler () {
   const damage= dealMonsterDamage(ATTACK_VALUE);
   currentMonsterHealth -=damage; //-= means subtracts damage and assigns the outcome as the new value of current monster health
   const playerdamaged=dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -=playerdamaged;
   if (currentMonsterHealth <= 0 && currentPlayerHealth >0) {
        alert('You win!');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth >0){
        alert ('You lost!');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0)
        alert ('You have a draw')
}

attackBtn.addEventListener('click', attackHandler)