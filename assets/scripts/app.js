const defaultResult = 0;
let currentResult = defaultResult;

function add()  {
    currentResult= currentResult + userInput.value;
    outputResult(currentResult, ''); 
}

add(7,7);

addBtn.addEventListener('click', add);

//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

