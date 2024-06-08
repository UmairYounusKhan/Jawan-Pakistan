var Total_marks = prompt("Enter Total Marks");
var Marks_obtained = prompt("Enter Obtained Marks");

var percentage = Marks_obtained / Total_marks * 100 ;

document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks:" + Total_marks + "</p>");
document.write("<p>Obtained Marks: " + Marks_obtained + "</p>");
document.write("<h3>Percentage: " + percentage + "</h3>");