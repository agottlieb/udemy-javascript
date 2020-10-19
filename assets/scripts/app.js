const defaultResult = 0;
let currentResult = defaultResult;

function add()  {
    const calcDescription = `${currentResult} +${userInput.value}`
    currentResult= currentResult + parseInt(userInput.value);
    outputResult(currentResult, calcDescription); 
}

addBtn.addEventListener('click', add);

//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

