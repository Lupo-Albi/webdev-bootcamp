function singSong() {
    console.log("DO");
    console.log("RE")
    console.log("MI")
}

function printHeart() {
    console.log("<3");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.!`);
}

function repeatStr(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

// In some dice games like Craps, a roll of two 1's is called "Snake Eyes". It's generally not a good roll. Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice. If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die1 === die2) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}