//hard-coded value in all caps
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE= 14;
const STRONG_ATTACK_VALUE= 17;
const HEAL_VALUE= 20;
const MODE_ATTACK= 'ATTACK';
const STRONG_MODE_ATTACK= 'STRONG_ATTACK';

const enteredValue =prompt('Maximum life for player and monster', '100');
let chosenMaxLife = parseInt(enteredValue);

//if user enters NAN, use the default value
if (isNaN(chosenMaxLife) || chosenMaxLife <=0) {
    chosenMaxLife= 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; 

//function is called by render.js, sets the players' maximum life in the bars
adjustHealthBars(chosenMaxLife); 

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound () { 
    const initialPlayerHealth = currentPlayerHealth;
    const playerdamaged=dealPlayerDamage(MONSTER_ATTACK_VALUE);
     currentPlayerHealth -=playerdamaged;

    if (currentPlayerHealth <=0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth; 
        setPlayerHealth(initialPlayerHealth);
        alert ('You got saved by the bonus life!');
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth >0) {
         alert('You win!');
     } else if (currentPlayerHealth <=0 && currentMonsterHealth >0){
         alert ('You lost!');
     } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0)
         alert ('You have a draw');
         
    if (currentMonsterHealth <= 0 || currentPlayerHealth <=0) {
        reset();
    }
}

function attackMonster (mode) {
    let maxDamage;
    if (mode ===MODE_ATTACK) {
        maxDamage=ATTACK_VALUE;
    } else if (mode ===STRONG_MODE_ATTACK){
        maxDamage=STRONG_ATTACK_VALUE;
    }
    const damage= dealMonsterDamage(maxDamage);
    currentMonsterHealth -=damage; //-= means subtracts damage and assigns the outcome as the new value of current monster health
    endRound();
}

function attackHandler () {
    attackMonster(MODE_ATTACK)
}

function strongAttackHandler () {
    attackMonster(STRONG_MODE_ATTACK)
}

function healPlayerHandler() {
    let healValue;
    //makes sure can't add more health than max number allowed
    if (currentPlayerHealth >= chosenMaxLife-HEAL_VALUE) {
        alert ('You can not have more than max health');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue= HEAL_VALUE; 
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)