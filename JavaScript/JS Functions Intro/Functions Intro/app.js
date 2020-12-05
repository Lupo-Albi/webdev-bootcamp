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

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

// Write a simple function multiply which accepts two numerical arguments and returns their product
function multiply(num1, num2) {
    return num1 * num2;
}

function isShortsWeather(temperature) {
    if (temperature >= 75) return true;
    else return false;
}

// Write a function called lastElement which accepts a single array argument. The function should return the last element of the array(without removing the element). If the array is empty, the function should return null.
function lastElement(array) {
    const lastIndex = array.length - 1;
    if(!array[lastIndex]) {
        return null;
    }
    return array[lastIndex];
}

// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged)
function capitalize(str) {
    const firstLetter = str[0];
    const capitalLetter = firstLetter.toUpperCase();
    return str.replace(firstLetter, capitalLetter);   
}

// Write a function called sumArray which accepts a single argument: an array of numbers. It should return the sum of all the numbers in the array.
function sumArray(numArray) {
    let totalSum = 0;
    
    for(let num of numArray) {
        totalSum += num;
    }
    
    return totalSum;
}

// Write a function called returnDay. This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is MOnday, 2 is Tuesday, etc.) If the number is less than 1 or greater than 7, the function should reutnr null.
function returnDay(number) {
    if (number < 1 || number > 7) return null;
    
    const daysOfWeek = {
        1 : 'Monday',
        2 : 'Tuesday',
        3 : 'Wednesday',
        4 : 'Thursday',
        5 : 'Friday',
        6 : 'Saturday',
        7 : 'Sunday'
    };
    
    return daysOfWeek[number];
}