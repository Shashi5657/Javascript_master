const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); //pushes value to the defined array
  console.log(logEntries); //prints 1st value of the array
}

function calculateResult(calculationType) {
  const enteredValue = parseInt(userInput.value);
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult = currentResult + enteredValue;
    mathOperator = "+";
  } else if(calculationType === 'SUBTRACT') {
    currentResult -= enteredValue;
    mathOperator = "-";
  } else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredValue;
    mathOperator = "*";
  } else if(calculationType === 'DIVIDE') {
    currentResult /= enteredValue;
    mathOperator = '/'
  }
  createAndWriteOutput(mathOperator, enteredValue, initialResult);
  writeToLog(calculationType, initialResult, enteredValue, currentResult);
}

function add() {
  //parseInt converts string to number, alternative way is using +
  //such as currentResult + +userInput.value
  // const enteredValue = parseInt(userInput.value);
  // const initialResult = currentResult;
  // currentResult = currentResult + enteredValue;
  // createAndWriteOutput('+', enteredValue, initialResult)
  // writeToLog("ADD", initialResult, enteredValue, currentResult);
  calculateResult("ADD");

  //   console.log(logEntry.number); //accessing object values
}

function subtract() {
  // const enteredValue = parseInt(userInput.value);
  // const calcDescription = `${currentResult} - ${enteredValue}`;
  // const initialResult = currentResult;
  // currentResult -= enteredValue;
  // outputResult(currentResult, calcDescription);
  // writeToLog("SUBTRACT", initialResult, enteredValue, currentResult);
  calculateResult("SUBTRACT");
}

function multiply() {
  // const enteredValue = parseInt(userInput.value);
  // const calcDescription = `${currentResult} * ${enteredValue}`;
  // const initialResult = currentResult;
  // currentResult *= enteredValue;
  // outputResult(currentResult, calcDescription);
  // writeToLog("MULTIPLY", initialResult, enteredValue, currentResult);
  calculateResult('MULTIPLY')
}

function divide() {
  // const enteredValue = parseInt(userInput.value);
  // const calcDescription = `${currentResult} / ${enteredValue}`;
  // const initialResult = currentResult;
  // currentResult = currentResult / enteredValue;
  // outputResult(currentResult, calcDescription);
  // writeToLog("DIVIDE", initialResult, enteredValue, currentResult);
  calculateResult('DIVIDE')
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
