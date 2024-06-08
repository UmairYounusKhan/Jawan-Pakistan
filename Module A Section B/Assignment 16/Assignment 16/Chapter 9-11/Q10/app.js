var userinput = prompt("Enter any number to know the Temperature");

if(userinput >= 40){
    document.write("It is too hot outside.")
}
else if(userinput >= 30){
    document.write("The Weather today is Normal.")
}
else if(userinput >= 20){
    document.write("Today's Weather is cool");
}
else if(userinput >= 10){
    document.write("OMG! Today's weather is so Cool.");
}
else if(userinput > 0 ){
    document.write("Today's Weather is cool and may be going to freeze");
}
else{
    document.write("It's freezing Outside");
}

