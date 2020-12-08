// const square = function(x) {
//     return x * x;
// }
const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

const rollDie = () => {
    return Math.floor(Math.random * 6) + 1;
}

const isEven = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}