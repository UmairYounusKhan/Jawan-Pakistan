var firstInteger = +(prompt("Enter the first integer:"));

var secondInteger = +(prompt("Enter the second integer:"));

if (firstInteger === secondInteger) {
    console.log("The two integers are equal.");
} 
else {
   var largerInteger = firstInteger > secondInteger ? firstInteger : secondInteger;
    console.log("The larger integer is:" + largerInteger);
}
