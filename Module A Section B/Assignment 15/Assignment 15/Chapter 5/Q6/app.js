function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  var celsiusTemp = prompt("Enter any value to convert Celsius to fehreneit");
  var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
  document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F");
  
  fahrenheitTemp = prompt("Enter any value to convert fehreneit to Celsius ");
  celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
  document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");
  