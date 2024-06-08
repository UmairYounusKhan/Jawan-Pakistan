let password = prompt("Please enter your password:");

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5.");
    } else {
        alert("OK");
    }
}
else{
    alert("Please First enter your password ");
}