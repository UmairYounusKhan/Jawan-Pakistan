var cityName = prompt("Enter the name of your city:");

if (cityName.toLowerCase() === "karachi") {
    document.write("Welcome to the city of lights!");
} 
else if(cityName.toLowerCase() === "islamabad") {
    document.write("Welcome to the province of Pakistan");
}
else{
    document.write("Welcome to " + cityName + "!");
}
