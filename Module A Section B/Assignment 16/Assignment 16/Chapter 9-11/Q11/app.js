var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter Second number");
var operation = prompt("Enter any Operator you want ( + , - , * , / , % )")

var result ;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Error: Division by zero";
    }
} else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        result = "Error: Modulo by zero";
    }
} else {
    result = "Error: Invalid operation";
}

document.write("Result is : " + ( firstNumber ) + " " + ( operation ) + " " + ( secondNumber ) + " = " + result);