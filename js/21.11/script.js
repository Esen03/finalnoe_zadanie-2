// alert("hello madik");
// alert('chotam');

// [1, 2].forEach


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

let firstNumber = '';
let operator = '';
let secondNumber = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      operator = button.textContent;
      display.value = '';
    } else {
      if (operator === '') {
        firstNumber += button.textContent;
        display.value = firstNumber;
      } else {
        secondNumber += button.textContent;
        display.value = secondNumber;
      }
    }
  });
});

clearButton.addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  display.value = '';
});

equalButton.addEventListener('click', () => {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  firstNumber = result.toString();
  operator = '';
  secondNumber = '';
  display.value = result;
});

// const count = 5;
// console.log(count);

// infinity
// const inf = 25 / 0;
// console.log('inf');

// NaN
// const a = 59;
// const b = 'text';
// const result = a-b;
// console.log(typeof result)

//string
const user_name = 'essentai';
const user_company = "Yandex";
console.log(typeof user_name);
console.log(typeof user_company);

const result = `hi have a good day ${user_name}`;
console.log(result);