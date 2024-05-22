const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];

function getMaxLife() {
  const enteredValue = prompt(
    "Choose maximum life for you & the monster.",
    "100"
  );
  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
   throw{message : 'Invalid user input, not a number!'}
  }
  return parsedValue;
}

let chosenMaxLife;

try{
    chosenMaxLife = getMaxLife();
}catch(error){
    console.log(error);
    chosenMaxLife = 100;
    alert('You entered something wrong, default value of 100 was used!')
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let lastLoggedEntry;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, PlayerHealth) {
  let logEntry;

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "MONSTER",
        finalPlayerHealth: PlayerHealth,
        finalMonsterHealth: monsterHealth,
      };
      battleLog.push(logEntry);
      break;

    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "MONSTER",
        finalPlayerHealth: PlayerHealth,
        finalMonsterHealth: monsterHealth,
      };
      battleLog.push(logEntry);
      break;

    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "PLAYER",
        finalPlayerHealth: PlayerHealth,
        finalMonsterHealth: monsterHealth,
      };
      battleLog.push(logEntry);
      break;

    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: event,
        value: value,
        target: "PLAYER",
        finalPlayerHealth: PlayerHealth,
        finalMonsterHealth: monsterHealth,
      };
      battleLog.push(logEntry);
      break;

    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: event,
        value: value,
        finalPlayerHealth: PlayerHealth,
        finalMonsterHealth: monsterHealth,
      };
      battleLog.push(logEntry);
      break;
    default:
      logEntry = {};
  }
  //   if (event === LOG_EVENT_PLAYER_ATTACK) {
  //     let logEntry = {
  //       event: event,
  //       value: value,
  //       target: "MONSTER",
  //       finalPlayerHealth: PlayerHealth,
  //       finalMonsterHealth: monsterHealth,
  //     };
  //     battleLog.push(logEntry);
  //   } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //     let logEntry = {
  //       event: event,
  //       value: value,
  //       target: "MONSTER",
  //       finalPlayerHealth: PlayerHealth,
  //       finalMonsterHealth: monsterHealth,
  //     };
  //     battleLog.push(logEntry);
  //   } else if (event === LOG_EVENT_MONSTER_ATTACK) {
  //     let logEntry = {
  //       event: event,
  //       value: value,
  //       target: "PLAYER",
  //       finalPlayerHealth: PlayerHealth,
  //       finalMonsterHealth: monsterHealth,
  //     };
  //     battleLog.push(logEntry);
  //   } else if (event === LOG_EVENT_PLAYER_HEAL) {
  //     let logEntry = {
  //       event: event,
  //       value: value,
  //       target: "PLAYER",
  //       finalPlayerHealth: PlayerHealth,
  //       finalMonsterHealth: monsterHealth,
  //     };
  //     battleLog.push(logEntry);
  //   } else if (event === LOG_EVENT_GAME_OVER) {
  //     let logEntry = {
  //       event: event,
  //       value: value,
  //       finalPlayerHealth: PlayerHealth,
  //       finalMonsterHealth: monsterHealth,
  //     };
  //     battleLog.push(logEntry);
  //   }
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  let initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER_WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER_WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === "ATTACK" ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  //   console.log(mode);
  //   console.log(maxDamage);
  const logEvent =
    mode === "ATTACK"
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  //   console.log(logEvent);
  // if (mode === "ATTACK") {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === "STRONG_ATTACK") {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  //   const damage = dealMonsterDamage(ATTACK_VALUE);
  //   currentMonsterHealth -= damage;
  //   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  //   currentPlayerHealth -= playerDamage;
  //   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
  //     alert("You Won");
  //   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
  //     alert("You Lost");
  //   } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
  //     alert("You have a draw!");
  //   }
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  //   const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  //   currentMonsterHealth -= damage;
  //   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  //   currentPlayerHealth -= playerDamage;
  //   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
  //     alert("You Won");
  //   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
  //     alert("You Lost");
  //   } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
  //     alert("You have a draw!");
  //   }
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your max initiaal health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
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

function printLogHandler() {
  // for (let i = 0; i <battleLog.length; i++){
  //     console.log(battleLog[i]);
  // }
  //manually printing the indedx
  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
