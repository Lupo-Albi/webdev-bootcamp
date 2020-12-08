// const square = function(x) {
//     return x * x;
// }
const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

// Use empty parens for functions without parameters
const rollDie = () => {
    return Math.floor(Math.random * 6) + 1;
}

// parens are optional if there is only one parameter:
const isEven = num => {
    return num % 2 === 0;
}

// Implicit Return: only with arrow functions
// Only works with a single expression in the body of the function
const isEven = num => (
    num % 2 === 0
);
const isEven = num => num % 2 === 0;// one-liner implicit return

const rollDie = () => (
    Math.floor(Math.random * 6) + 1
);

const add = (a, b) => a + b;