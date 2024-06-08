const input = prompt("Enter a character (number or string):");
const charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    console.log(input + " is a number.");
}
else if (charCode >= 65 && charCode <= 90) {
    console.log(input + " is an uppercase letter.");
}

else if (charCode >= 97 && charCode <= 122) {
    console.log(input + " is a lowercase letter.");
}

else {
    console.log("Invalid input.");
}
