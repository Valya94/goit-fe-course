'use strict';

const numbers = [];
let userInput = 0;
let total = 0;
do{
  userInput = prompt('Введите число ');
  if (!isNaN(userInput) && userInput!==null && userInput!==''){
    numbers.push(+userInput);
  }
  else if (userInput==null){
    break;
  }
  else {
    alert('Было введено не чиcло, попробуйте еще раз.');
  }
}
while (userInput !== null);

for(let element of numbers){
  if (numbers.length!==0){
    total  = element + total;

  }
}
alert(`Общая сумма чиcел равна ${total}`);