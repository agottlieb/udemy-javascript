//hard-coded value in all caps
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE= 14;
const STRONG_ATTACK_VALUE= 17;
const HEAL_VALUE= 20;
const MODE_ATTACK= 'ATTACK';
const MODE_STRONG_ATTACK= 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_MONSTER_STRONG_ATTACK = 'PLAYER_MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL= 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER= 'GAME_OVER';

const enteredValue =prompt('Maximum life for player and monster', '100');
let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

//if user enters NAN, use the default value
if (isNaN(chosenMaxLife) || chosenMaxLife <=0) {
    chosenMaxLife= 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; 
let lastLoggedEntry;

//function is called by render.js, sets the players' maximum life in the bars
adjustHealthBars(chosenMaxLife); 

function writeToLog (event, value, monsterHealth, playerHealth) {
    let logEntry= {      
        event: event, //key: actual parameter/variable value
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    //switch usage: one condition, checking for equality
    // switch (event){
    //   case LOG_EVENT_PLAYER_ATTACK:  //concrete value stored in this variable/parameter
    //   logEntry.target= 'MONSTER';
    //   break; //if that case was handled, don't handle other cases otherwise fall through--goes right into next case
    //   case LOG_EVENT_PLAYER_STRONG_ATTACK:
    //     logEntry.target= 'MONSTER';
    //   break; 
    //   default: logEntry = {};
    // } 

    if (event===LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target= 'MONSTER';
        } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
            logEntry = {
              event: event,
              value: value,
              target: 'MONSTER',
              finalMonsterHealth: monsterHealth,
              finalPlayerHealth: playerHealth
            };
        } else if (event === LOG_EVENT_MONSTER_ATTACK) {
            logEntry = {
              event: event,
              value: value,
              target: 'PLAYER',
              finalMonsterHealth: monsterHealth,
              finalPlayerHealth: playerHealth
            };
          } else if (event === LOG_EVENT_PLAYER_HEAL) {
            logEntry = {
              event: event,
              value: value,
              target: 'PLAYER',
              finalMonsterHealth: monsterHealth,
              finalPlayerHealth: playerHealth
            };
          } else if (event === LOG_EVENT_GAME_OVER) {
            logEntry = {
              event: event,
              value: value,
              finalMonsterHealth: monsterHealth,
              finalPlayerHealth: playerHealth
            };  
          }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound () { 
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage=dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -=playerDamage;
    writeToLog( //logs after monster hits player
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if (currentPlayerHealth <=0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth; 
        setPlayerHealth(initialPlayerHealth);
        alert ('You got saved by the bonus life!');
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth >0) {
         alert('You win!');
         writeToLog(
           LOG_EVENT_GAME_OVER,
           'PLAYER WON',
           currentMonsterHealth,
           currentPlayerHealth 
         )
     } else if (currentPlayerHealth <=0 && currentMonsterHealth >0){
         alert ('You lost!');
         writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth 
          )
     } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0)
         alert ('You have a draw');
         writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth 
          )
         
    if (currentMonsterHealth <= 0 || currentPlayerHealth <=0) {
        reset();
    }
}
//parameter mode identifies and designates attack type, used to be a string now its a global constant
function attackMonster(mode) {
    const maxDamage = mode ===MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode ===MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK ;
    // if (mode === MODE_ATTACK) {
    //   maxDamage = ATTACK_VALUE;
    //   logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //   maxDamage = STRONG_ATTACK_VALUE;
    //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage; //-= means subtracts damage and assigns the outcome as the new value of current monster health
    writeToLog(
      logEvent,
      damage,
      currentMonsterHealth,
      currentPlayerHealth
    );
    endRound();
  }

function attackHandler () {
    attackMonster(MODE_ATTACK)
}

function strongAttackHandler () {
    attackMonster(MODE_STRONG_ATTACK)
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
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
      );
    endRound();
}

function printLogHandler () {
  // for (let i = 0; i <3; i++) { //if run third part outside loop body, will run before code inside {}
  //   console.log("-------")
  // }
  let j = 0;
  while (j <3) {
    console.log(j);
    j++;
  }

  let i = 0;
 for (const logEntry of battleLog) {
   if (!lastLoggedEntry && lastLoggedEntry !== 0|| lastLoggedEntry < i) {
    console.log(`#${i}`); //dynamic content to give the number of the log entry
    for (const key in logEntry) {
     //  console.log(key) //name does not matter, JS knows that this variable refers to left side of the colon
     //  console.log(logEntry[key]); //JS will access the value of that object, i.e. the right side of the colon
     console.log (`${key} => ${logEntry[key]}`)
     }
     lastLoggedEntry=i;
     break; //allows you to break out of a code execution before it would normally finish
    }
   i++
  
  }
 }

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)