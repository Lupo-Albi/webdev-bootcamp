// const password = prompt("Enter your password");

// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password!");
// } else {
//     console.log("Incorrect format for password!");
// }

const age = prompt("Enter your age");

if ( age > 0 && age < 5 || age >= 65) {
    console.log("Free");
} else if ( age >= 5 && age < 10) {
    console.log("$10");
} else if ( age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("Invalid age");
}