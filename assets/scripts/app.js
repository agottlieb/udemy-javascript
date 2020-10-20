const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput () {
    return parseInt(userInput.value);
}

function add()  {
    const enteredNumber = getUserInput;
    const calcDescription = `${currentResult} +${enteredNumber}`
    currentResult= currentResult + enteredNumber;
    outputResult(currentResult, calcDescription); 
}

function subtract () {
    const enteredNumber = getUserInput;
    const calcDescription = `${currentResult} - ${enteredNumber}`
}

addBtn.addEventListener('click', add);



