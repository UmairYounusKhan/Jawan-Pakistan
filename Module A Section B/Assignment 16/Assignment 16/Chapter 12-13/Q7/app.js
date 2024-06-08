var time24 = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

var time12;
if (time24 >= 0 && time24 <= 2359) {
    if (time24 >= 100 && time24 <= 1159) {
        time12 = time24 + "am";
    } else if (time24 >= 1200 && time24 <= 1259) {
        time12 = "12" + (time24 % 1200) + "pm";
    } else if (time24 >= 1300 && time24 <= 2359) {
        time12 = Math.floor(time24 / 100 - 12) + (time24 % 100) + "pm";
    } else if (time24 === 0) {
        time12 = "12am";
    } else if (time24 === 1200) {
        time12 = "12pm";
    }
    console.log("Time in 12-hour clock format:", time12);
} else {
    console.log("Invalid time input.");
}
