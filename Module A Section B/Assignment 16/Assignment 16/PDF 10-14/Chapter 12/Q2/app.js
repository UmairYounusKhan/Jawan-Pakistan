var english = +prompt("Enter your English Marks");
var urdu = +prompt("Enter your Urdu Marks");
var math = +prompt("Enter your Math Marks");
var science = +prompt("Enter your Science Marks");

var result = (english + urdu + math + science)
var percentage = (result / 400 * 100);

document.write("<h1>" + "Result" + "</h1>");
 document.write("Your English Number is = " + english + "<br>");
 document.write("Your Urdu Number is = " + urdu + "<br>");
 document.write("Your Math Number is = " + math + "<br>");
 document.write("Your Science Number is = " + science + "<br>");

 document.write("Total = " + (english) + " + " + (urdu) + " + " + (math) + " + " + (science) + "=" + result + "<br>");
 document.write("Your percentage is = " +  percentage + "%" + "<br>")

if(percentage >= 80){
    document.write("Your grade is = A+");
}
else if(percentage >= 70){
    document.write("Your grade is = A");
}
else if(percentage >=60 ){
    document.write("Your grade is = B");
}
else if(percentage >=50){
    document.write("Your grade is = C");
}
else if(percentage >=40){
    document.write("Your grade is = D");
}
else if(percentage >=33){
    document.write("Your grade is = E");
}
else{
    document.write("You are Fail");
}
 

