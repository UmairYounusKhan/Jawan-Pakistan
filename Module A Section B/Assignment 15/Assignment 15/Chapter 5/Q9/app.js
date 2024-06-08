// var usdollor = prompt("Enter the amount in US Dollar:");
// var saudiriyal = prompt("Enter the amount in Saudi Riyal:");

// var ustopak = 

var usd = prompt("Enter the amount in US Dollar:");
var sar = prompt("Enter the amount in Saudi Riyal:");
var exchangeRateUSD = 104.80;
var exchangeRateSAR = 28;

var totalInPKR = (usd * exchangeRateUSD) + (sar * exchangeRateSAR);
document.write("<h1>Currency In PKR</h1>");
document.write("Total in Pakistani Rupees: " + "<b>" + totalInPKR + " PKR" + "</b>");
