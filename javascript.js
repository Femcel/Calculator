//#region constants 
const display = document.getElementById("Display");
const clearBtn = document.getElementById("Clear");
const numbersBtns = document.getElementsByClassName("number");
const equals = document.getElementById("eqBtn");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const sum = document.getElementById("sum");
//#endregion

//#region variables
let a = "";
let b = "";
let operation = "";
let number = "";
//#endregion

//#region Display Functions
function TypeNumber(digit) {
  number += digit;
  Refresh();
}

function Clear() {
  number = "";
  Refresh();
}

function Reset() {
  a = "";
  b = "";
  number = "";
  operation = "";
  Refresh();
}
function Refresh() {
  display.textContent = number;
}
//#endregion

//#region operations

function Add(a, b) {
  let result = a + b;
  console.log("SOMA: " + result);
} 

function Subtract(a, b) {
  let result = a - b;
  return result;
} 

function Multiply(a, b) {
  let result = a * b;
  return result;
} 
function Divide(a, b) {
  let result = a / b;
  return result;
} 
//#endregion

function SetA () {
  a = number;
  Clear();
}

function SetB() {
  b = number;
  Clear();
}

function Operate() {
  SetB();
  a = parseInt(a);
  b = parseInt(b);
  switch (operation) {
    case 'sum':
      return Add(a, b);

    case 'subtract':
      return Subtract(a, b);

    case 'multiply':
      return Multiply(a, b);

    case 'divide':
      return Divide(a, b);

    default:
      return console.log("Invalid Operation")
  }
}

for(i = 0; i <= numbersBtns.length; i++) {
  if(numbersBtns[i]){
    numbersBtns[i].addEventListener("click", (event) => {
      TypeNumber(event.currentTarget.textContent);
    });
  }
}

clearBtn.addEventListener("click", Reset);
sum.addEventListener("click", () => {
  SetA();
  Clear();
  operation = "sum";});
equals.addEventListener("click", Operate);
