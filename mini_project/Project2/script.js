let num1 = parseInt(prompt("Enter Number 1: "));
let num2 = parseInt(prompt("Enter Number 2: "));
let operator = prompt("Enter the operator(+,-,*,/): ");
let result = null;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero.");
    result = null;
  } else {
    result = num1 / num2;
  }
} else {
  console.log(`${operator} is invalid operator`);
  result = null;
}

if (result !== null) {
  console.log(`The resilt is ${result}`);
}else{
    console.log("No valid result")
}
