// Q1
// var studentNames = [];

// Q2
// var studentNames = new Array();

// Q3
// var stringsArray = ["apple", "banana", "orange", "grape"];

// Q4
// const stringsArray = [1,5,58,65,47];

// Q5
// const stringsArray = [true,false];

// Q6
// const stringsArray = ["apple", 1, true , "45"];

// Q7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for (var i = 0; i < qualifications.length; i++) {
//     document.write(qualifications[i] + "<br>");
// }

// Q8
// var studentNames = ["John", "Alice", "Bob"];

// var scores = [420, 380, 450]; 

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / 500) * 100;
//     document.write(`${studentNames[i]} scored ${scores[i]} marks out of 500, with a percentage of ${percentage}%`+ "<br>");
// }



// Q9
// let colors = ["red", "green", "blue"];

// document.write("<b>Original Array:</b> " + colors + "<br><br>");

// const colorToAddStart = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddStart);

// document.write("<b>Array after adding color to the beginning:</b> " + colors + "<br><br>");

// const colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// document.write("<b>Array after adding color to the end:</b> " + colors + "<br><br>");

// colors.unshift("purple", "yellow");

// document.write("<b>Array after adding two more colors to the beginning:</b> " + colors + "<br><br>");

// colors.shift();

// document.write("<b>Array after deleting the first color:</b> " + colors + "<br><br>");

// colors.pop();

// document.write("<b>Array after deleting the last color:</b> " + colors + "<br><br>");

// const indexToAdd = prompt("Enter the index to add a color:");
// const colorToAddIndex = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorToAddIndex);

// document.write("<b>Array after adding color at specified index:</b> " + colors + "<br><br>");

// const indexToDelete = prompt("Enter the index to delete color(s):");
// const numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(indexToDelete, numberOfColorsToDelete);

// document.write("<b>Array after deleting color(s) from specified index:</b> " + colors + "<br><br>");

// Q10
// const scores = [89, 75, 92, 83, 78];

// document.write("Original Scores:", scores + "<br>");

// scores.sort((a, b) => a - b);

// document.write("Sorted Scores (Ascending Order):", scores );



// Q11
// var cities = ["Karachi", "Peshawar", "Islamabad", "Quetta", "Multan"];

// var selectedCities = [];

// selectedCities.push(cities[0], cities[1], cities[3]);

// document.write("Selected Cities:", selectedCities);


// Q12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write("arraylist: "+ arr + "<br>")
// document.write("stringlist: " + singleString);


// Q13
// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// console.log(devices);
// console.log("Out:", devices.shift()); 
// console.log("Out:", devices.shift()); 
// console.log("Out:", devices.shift()); 
// console.log("Out:", devices.shift()); 


// Q14
// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// console.log(devices);
// console.log("Out:", devices.pop()); 
// console.log("Out:", devices.pop()); 
// console.log("Out:", devices.pop()); 
// console.log("Out:", devices.pop()); 

// Q15
// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// let selectMenuHTML = '<select>';

// for (let i = 0; i < phoneManufacturers.length; i++) {
//     selectMenuHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
// }

// selectMenuHTML += '</select>';

// document.write(selectMenuHTML);
