const userInput = parseInt(prompt("Enter a number:"));

if (userInput % 3 === 0) {
    document.write(userInput + " is divisible by 3." + "<br>" + "and answer is:" + (userInput / 3));
} else {
    
    document.write(userInput + " is not divisible by 3.");
}
