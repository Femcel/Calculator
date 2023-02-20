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

console.log(Operate('add', 5, 3));
console.log(Operate('subtract', 5, 3));
console.log(Operate('multiply', 5, 3));
console.log(Operate('divide', 5, 3));