const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  //parseInt converts string to number, alternative way is using +
  //such as currentResult + +userInput.value
  const enteredValue = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredValue}`;
  currentResult = currentResult + enteredValue;
  outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredValue = parseInt(userInput.value);
  const calcDescription = `${currentResult} - ${enteredValue}`;
  currentResult -= enteredValue;
  outputResult(currentResult, calcDescription);
}

function multiply() {
  const enteredValue = parseInt(userInput.value);
  const calcDescription = `${currentResult} * ${enteredValue}`;
  currentResult *= enteredValue;
  outputResult(currentResult, calcDescription);
}

function divide() {
  const enteredValue = parseInt(userInput.value);
  const calcDescription = `${currentResult} / ${enteredValue}`;
  currentResult = currentResult / enteredValue;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

let outputText = "( " + defaultResult + " + 10) * 10/5 - 5";

// let userName = 'shashi';
// let userId = 2024;
// let isStudent = true;

// function alertMessage(user){
//     alert("hello " + user)
// }

// alertMessage('shashi')

// function sayHello(user){
//     console.log('Namasthe ', user)
// }

// sayHello('shashi')

// currentResult = add(5, 1);
// add(1, 2)
