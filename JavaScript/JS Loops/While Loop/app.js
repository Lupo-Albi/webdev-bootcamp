const secret = "XCX";

let guess = prompt("enter the secret code...");

while (guess !== secret) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATULATION")