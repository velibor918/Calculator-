let varOne = '';
let varTwo = '';
let result = '';
let operand = ''; 

document.querySelector('.indicator').textContent = operand;

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
    document.querySelector('.indicator').textContent = operand;
};

btnPlus.addEventListener('click', operandPlus);

function operandMinus () {
    if (operand !== ''){
        let tempOperand = checkValue(operand);
        calculate(tempOperand);
      }
    operand = '-';
    document.querySelector('.indicator').textContent = operand;
};

btnMinus.addEventListener('click', operandMinus);

function operandTimes () {
    if (operand !== ''){
        let tempOperand = checkValue(operand);
        calculate(tempOperand);
      };
    operand = '*';
    document.querySelector('.indicator').textContent = operand;
};

btnTimes.addEventListener('click', operandTimes);

function operandDivide () {
    if (operand !== ''){
        let tempOperand = checkValue(operand);
        calculate(tempOperand);
      };
    operand = '/';
    document.querySelector('.indicator').textContent = operand;
};

btnDivide.addEventListener('click', operandDivide);

let input = document.querySelector('.input');

function calculate () {
    if (result !== '') {
        if (Number.isInteger(result) == false){
            result = Number(result);
            result = result.toFixed(2);
        }
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
        if (Number.isInteger(result) == false){
            result = result.toFixed(2);
        };
        input.textContent = result;
    } else if (operand == '-') {
        result = Number(varOne) - Number(varTwo);
        if (Number.isInteger(result) == false){
            result = result.toFixed(2);
        }
        input.textContent = result;
    } else if (operand == '*') {
        result = Number(varOne) * Number(varTwo);
        if (Number.isInteger(result) == false){
            result = result.toFixed(2);
        }
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
        if (Number.isInteger(result) == false){
            result = result.toFixed(2);
        }
        input.textContent = result;
    }
    varOne = '';
    varTwo = '';
    operand = '';
    document.querySelector('.indicator').textContent = '';
}

btnEquals.addEventListener('click', calculate);

function numberButtons (event) {
    if(operand != '') {
        if (varTwo.length > 6) {
            return false
        }
        input.textContent = '';
        varTwo += event.target.textContent;
        input.textContent = varTwo;
        tempOperand = operand;
    } else {
        if (varOne.length > 6) {
            return false
        }
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
    document.querySelector('.indicator').textContent = '';
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

function backspace () {
    if(operand != '') {
        input.textContent = '';
        varTwo = varTwo.slice(0, -1);
        input.textContent = varTwo;
        tempOperand = operand;
    } else {
        varOne = varOne.slice(0, -1);
        input.textContent = varOne;}
};

btnBackspace.addEventListener('click', backspace);

function keyboardNumber (num) {
    if(operand != '') {
        if (varTwo.length > 6) {
            return false
        }
        input.textContent = '';
        varTwo += num;
        input.textContent = varTwo;
        tempOperand = operand;
    } else {
        if (varOne.length > 6) {
            return false
        }
        varOne += num;
        input.textContent = varOne;}
}