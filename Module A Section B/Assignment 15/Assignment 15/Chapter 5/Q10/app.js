var num1 = +prompt("Enter any Number");
var num2 = +prompt("Enter any Number to Add");
var num3 = +prompt("Enter any number for Multiply");
var num4 = +prompt("Enter any Number for Divide");

var add = num1 + num2;
var multiply = add * num3;
var divide = multiply / num4

document.write("<h1>Calculation</h1>");
document.write("<p>" + "Initial Number:" + num1 + "</p>");
document.write("<p>" + "Addition:" + add + "</p>");
document.write("<p>" + "Multiplication:" + multiply + "</p>");
document.write("<p>" + "Division:" + divide + "</p>");