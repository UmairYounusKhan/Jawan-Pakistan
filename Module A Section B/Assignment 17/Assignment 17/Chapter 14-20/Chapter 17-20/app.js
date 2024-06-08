// Q1
// for(var i=0; i<11; i++ ){
//     document.write(i , "<br>")
// }

// Q2
// for(var i=0; i<=12; i++ ){
//     document.write(i , "<br>")
// }

// Q3
// for (var i = 0; i <= 4; i++) {
//     document.write(i , "<br>")
// }

// Q4
// for (var count = 0; count <100; count++) {
// document.write(count , "<br>")
// }

// Q5
// for (let count = 3; count > 0; count--) {
//     document.write(count , "<br>")
// }

// Q6
// var array = [1, 2, 3, 4, 5];
// var numberOfElements = array.length;
// document.write(numberOfElements);

// Q7
// var flag = true;

// Q8
// var pets = ["tiger","parrot","lion","elephant"]
// for (let i = 0; i < pets.length; i++) {
//     document.write(i, "<br>");
// }

// Q9
// for (let i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert("Counter is: " + i);
//     }
// }

// Q10
// var userNames = ["Umair", "Ali", "Jawad", "Mati"];

// var firstName = prompt("Enter first name");

// for (var i = 0; i < userNames.length; i++) {
   
//     if (firstName === userNames[i]) {
//         alert("Welcome, " + firstName + "!");
//     } else if (i === userNames.length - 1) {
//         alert("Please write correct user name.");
//     }
// }

// Q11
// var list = ["Umair", "Ali", "Jawad", "Mati"];
// var userInput = prompt("Enter your name")
// var matchFound = false;
// for (var i = 0; i < list.length; i++){
//      if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true; 
//         break;
//     }
// }
// if (!matchFound){
//     alert("Match not found")
// }

// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        document.write(firstArr[i] + secondArr[j] + "<br>");
    }
}
