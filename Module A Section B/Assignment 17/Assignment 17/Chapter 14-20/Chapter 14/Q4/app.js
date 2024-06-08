var num1 = prompt("Enter Value of num1 ");
var num2 = prompt("Enter value of num2 ");

if (num1 === num2) {
    var num1 = prompt("Enter Value of num1 again ");
    var num2 = prompt("Enter value of num2 again ");
    if (num1 <= num2) {
        alert("Both conditions are true!");
    }
    else{
        alert("Conditions are false ")
    }
} 
else {
    alert("Conditions are not met.");
}
