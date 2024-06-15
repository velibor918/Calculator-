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
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let btnTimes = document.querySelector('.times');
let btnDivide = document.querySelector('.divide');
let btnClear = document.querySelector('.clear');
let btnEquals = document.querySelector('.equals');

btnPlus.addEventListener('click', () => operand = '+');
btnMinus.addEventListener('click', () => operand = '-');
btnTimes.addEventListener('click', () => operand = '*');
btnDivide.addEventListener('click', () => operand = '/');

let input = document.querySelector('.input');

function calculate () {
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
    } else {
        varOne += event.target.textContent;
        input.textContent = varOne;}
}

let numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', numberButtons)
});