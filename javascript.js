const display = document.getElementById("Display");
const clearBtn = document.getElementById("Clear");
const numbersBtns = document.getElementsByClassName("number");

let text = display.textContent;

function TypeNumber(number) {
  text += number;
  Refresh();
}

function Clear() {
  text = "";
  Refresh();
}

function Refresh() {
  display.textContent = text;
}
function Add(a, b) {
  let result = a + b;
  return result;
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

function Operate(operation, a, b) {
  switch (operation) {
    case 'add':
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

clearBtn.addEventListener("click", Clear);
