const display = document.querySelector('.display');
const numbers = document.querySelector('.input');
const opearators = document.querySelectorAll('.operators');
const clearBtn = document.querySelector('#clear-btn');

display.value = "";
clearBtn.addEventListener('click', () => {
  display.value = "";
})

function appendToDisplay(input) {
  display.value = input;
}

var op1 = null;
var op2 = null;

numbers.addEventListener('click', () => {
  target = event.target.id;
  console.log(target);

  
})