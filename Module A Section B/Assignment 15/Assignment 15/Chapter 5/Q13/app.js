
let favoriteSnack = prompt("Enter your Favourite Snack");

let currentAge =  prompt("Enter your Current Age");

let maxAge =  prompt("Enter your Max Age");

let amountPerDay = prompt("Enter Amount per Day");

let remainingYears = maxAge - currentAge;

let totalAmount = amountPerDay * 365 * remainingYears;

document.write("You would eat a total of " + "<b>" + totalAmount + "</b>" + " " + favoriteSnack + " for the rest of your life.");
