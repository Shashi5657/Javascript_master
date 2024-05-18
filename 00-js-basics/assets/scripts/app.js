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

const defaultResult = 0
let currentResult = defaultResult

function add(a, b){
    const result = a + b;
    return result
}

currentResult = add(5, 1);  
add(1, 2)

// currentResult = (currentResult + 10) * 10/5 - 5

let outputText = '( ' + defaultResult + ' + 10) * 10/5 - 5'

outputResult(currentResult, outputText)

