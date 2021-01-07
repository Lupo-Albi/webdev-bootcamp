// It looks like spread, but it's not
// Collects all remaining arguments into a actual array

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

sum(8, 4, 3, 2); // 17
sum(2, 3); // 5

// Rest Params
function sumAll(...nums) {
    // let total = 0;
    // for (let n of nums) total += n;
    // return total;
    return nums.reduce((total, el) => total + 3)
}

sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}