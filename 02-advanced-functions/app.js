const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  let randomValue = Math.random();
  // console.log(randomValue)

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game started");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice)
  }
  // console.log(playerChoice, 'Player')
  // console.log(computerChoice, 'Computer')
  // console.log(winner)

  let message = `You selected ${playerChoice}, computer selected ${computerChoice}, therefore  `;
  if (winner === RESULT_DRAW) {
    message = message + "You had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "You Won";
  } else {
    message = message + "You lost";
  }

  alert(message);
  gameIsRunning = false
});

//addEventListener is called method, startGame is called function
//startGameBtn is an object & obj can have methods like we defined or predefined
//params vs arguments
// while declaring function, we write parameters in the bracketts()
//while calling functions, we write arguments in the brackets()
