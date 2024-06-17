let varOne = '';
let varTwo = '';
let result = '';
let operand = ''; 



let btnOne = document.querySelector('.one');
let btnTwo = document.querySelector('.two');
let btnThree = document.querySelector('.three');
let btnFour = document.querySelector('.four');
let btnFive = document.querySelector('.five');
let btnSix = document.querySelector('.six');
let btnSeven = document.querySelector('.seven');
let btnEight = document.querySelector('.eight');
let btnNine = document.querySelector('.nine');
let btnZero = document.querySelector('.zero');
let btnPeriod = document.querySelector('.period');
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let btnTimes = document.querySelector('.times');
let btnDivide = document.querySelector('.divide');
let btnClear = document.querySelector('.clear');
let btnBackspace = document.querySelector('.backspace');
let btnEquals = document.querySelector('.equals');

function checkValue (value) {
    tempValue = value;
    return tempValue;
}

function operandPlus () {
  if (operand !== ''){
    let tempOperand = checkValue(operand);
    calculate(tempOperand);
  }
    operand = '+';
};

btnPlus.addEventListener('click', operandPlus);

function operandMinus () {
    if (operand !== ''){
        let tempOperand = checkValue(operand);
        calculate(tempOperand);
      }
    operand = '-';
};

btnMinus.addEventListener('click', operandMinus);

function operandTimes () {
    if (operand !== ''){
        let tempOperand = checkValue(operand);
        calculate(tempOperand);
      };
    operand = '*';
};

btnTimes.addEventListener('click', operandTimes);

function operandDivide () {
    if (operand !== ''){
        let tempOperand = checkValue(operand);
        calculate(tempOperand);
      };
    operand = '/';
};

btnDivide.addEventListener('click', operandDivide);

let input = document.querySelector('.input');

function calculate () {
    if (result !== '') {
        varOne = result.toString();
        result = '';
        input.textContent = varOne;
    }
    if (varTwo == '' || operand == ''){
        varOne = '';
        varTwo = '';
        operand = '';
        input.textContent = varOne;
        return alert('Resetting...');
    }
    if (operand == '+') {
        result = Number(varOne) + Number(varTwo);
        input.textContent = result;
    } else if (operand == '-') {
        result = Number(varOne) - Number(varTwo);
        input.textContent = result;
    } else if (operand == '*') {
        result = Number(varOne) * Number(varTwo);
        input.textContent = result;
    } else if (operand == '/') {
        if (varTwo == '0') {
            varOne = '';
            varTwo = '';
            operand = '';
            input.textContent = varOne;
            return alert('We can`t do that, no sir!');
        }
        result = Number(varOne) / Number(varTwo);
        input.textContent = result;
    }
    varOne = '';
    varTwo = '';
    operand = '';
}

btnEquals.addEventListener('click', calculate);

function numberButtons (event) {
    if(operand != '') {
        input.textContent = '';
        varTwo += event.target.textContent;
        input.textContent = varTwo;
        tempOperand = operand;
    } else {
        varOne += event.target.textContent;
        input.textContent = varOne;}
}

let numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', numberButtons)
});

function clear() {
    varOne = '';
    varTwo = '';
    operand = '';
    result = '';
    input.textContent = varOne;
};

btnClear.addEventListener('click', clear);

function periodNum () {
    let tempInput = input.textContent;
    if(tempInput.includes('.')) {
        return false;
    }
    
    if(operand != '') {
        input.textContent = '';
        varTwo += '.';
        input.textContent = varTwo;
        tempOperand = operand;
    } else {
        varOne += '.';
        input.textContent = varOne;}
};

btnPeriod.addEventListener('click', periodNum);