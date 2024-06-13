let varOne = '';
let varTwo = '';
let result = '';

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
let btnDivide = document.querySelector('.divide');
let btnClear = document.querySelector('.clear');

let input = document.querySelector('.input');

function numberButtons (event) {
    varOne += event.target.textContent;
    input.textContent += event.target.textContent;
}

let numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', numberButtons)
});