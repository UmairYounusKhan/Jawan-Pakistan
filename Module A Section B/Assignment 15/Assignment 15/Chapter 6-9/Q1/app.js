var a = prompt("Enter any Value");

document.write("<h1>Result</h1>");

document.write("The value of a is: "+ a + "<br>" + "<br>");

a = ++a;
document.write("The value of ++a is: "+ a + "<br>");
document.write("Now the value of a is: "+ a + "<br>" + "<br>");

a = a++;
document.write("The value of a++ is: "+ a + "<br>");
document.write("Now the value of a is: "+ a + "<br>" + "<br>");

a = --a;
document.write("The value of --a is: "+ a + "<br>");
document.write("Now the value of a is: "+ a + "<br>" + "<br>");

a = a--;
document.write("The value of a-- is: "+ a + "<br>");
document.write("Now the value of a is: "+ a + "<br>" + "<br>");