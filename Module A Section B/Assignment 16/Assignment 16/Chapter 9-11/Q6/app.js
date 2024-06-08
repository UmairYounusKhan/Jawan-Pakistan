var english = +prompt("Enter your English Number");
var math = +prompt("Enter your Math Number");
var Biology = +prompt("Enter your Biology Number");
var Sindhi = +prompt("Enter your Sindhi Number");

var total = 400;
var Percentage = (english + math + Biology + Sindhi) / total * 100;

document.write("<h1>Your Marks are:</h1>");
document.write("Total Marks:" + 400 + "<br>")
document.write("Obtained Marks:" + (english + math + Biology + Sindhi) + "<br>");
if(Percentage >= 80 && Percentage < 100){
    document.write("Your Total Percentage is A+" + "<br>" + "Keep it Up")
}
else if(Percentage >= 70 && Percentage < 80){
    document.write("Your Total Percentage is A" + "<br>" + "Good But need to improve")
}
else if(Percentage >= 60 && Percentage < 70){
    document.write("Your Total Percentage is B" + "<br>" +  "You Need to Work Harder Next Time.")
}
else if(Percentage >= 50 && Percentage < 60){
    document.write("Your Total Percentage is B"  + "<br>" + "Need to improve")
}
else if(Percentage >= 40 && Percentage < 50){
    document.write("Your Total Percentage is C" + "<br>" + "Need to do Hard Work")
}
else if(Percentage >= 35 && Percentage < 40){
    document.write("Your Total Percentage is D" + "<br>" + "Ypu need to improve and  work hard next time")
}
else if(Percentage > 100){
    document.write("Invalid  Percentage")
}
else{
    document.write("Fail"  + "<br>" + "Work Hard Next Time");
}