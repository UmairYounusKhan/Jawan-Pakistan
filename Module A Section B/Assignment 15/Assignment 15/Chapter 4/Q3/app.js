var heading = "Rules for naming JS variables";
var name1 = "numbers,";
var name2 = "$,";
var name3 = "_"
var fullname = "$my_!stVariable"
var letter = "letter,";
var sense = "sensitive";
var words = "keywords";




document.write("<h1>" + "A heading stating " + heading + "</h1>");

document.write("a) Variable names can only contain " + "<b>" + name1 + "</b>" + " " +  "<b>" + name2 + "</b>"  + " " + "and " +  "<b>" + name3 + "</b>"  + "." + " For example " +  "<b>" + fullname + "." + "</b>" + "<br>" +"<br>" );

document.write("b) Variable must begin with a " + "<b>" + letter + "</b> " +  "<b>" + name2 + "</b> " + "or" +  "<b>" + name3 + "</b> " + "."  + "For example: " + "<b>" + name2 + "name," + name3 + "name," + "or" + " name" + "." + "</b>"  + "<br>" +"<br>" );

document.write("c) Variable names are case " + "<b>" + sense + "</b>" + "." + "<br>" +"<br>" )

document.write("d) Variable names should not be JS " + "<b>" + words + "</b>" + "."  + "<br>" +"<br>" )