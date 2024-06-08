var priceItem1 =  prompt("Enter Item1 Price"); 
var priceItem2 =  prompt("Enter Item2 Price");
var quantityItem1 = prompt("Enter Item1 quantity"); 
var quantityItem2 = prompt("Enter Item2 quantity"); 
var shippingCharges = prompt("Enter Your Shipping Charges"); 


var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


document.write("<h1>Shopping Chart</h1>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalCost + "</h3>");
