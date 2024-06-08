var color = prompt("Enter the color of traffic signal (red, yellow, green):");

if (color === "red" ) {
    document.write("STOP! The traffic signal is red.");
} 
else if(color === "yellow") {
    document.write("READY TO STOP! The traffic signal is about to turn red.");
}
else if(color === "green") {
    document.write("GO! The traffic signal is green.");
}
else{
    document.write("Invalid color! Please enter red, yellow, or green.");
}
