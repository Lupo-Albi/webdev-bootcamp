let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) { // maximum could be NaN, which is a falsy value
    maximum = parseInt(prompt("Enter the maximum number!"));
}

const targetNum = Math.floor((Math.random() * maximum) + 1);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;

    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }

    attempts++;
}
if (guess === 'q') {
    console.log("OK, you quit!")
} else {
    console.log("CONGRATS! YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}