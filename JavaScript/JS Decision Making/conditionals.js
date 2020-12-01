// console.log("BEFORE CONDITIONAL");
// let random = Math.random();

// if (random < 0.5) {
//     console.log("Your number is less than 0.5!");
// } else {
//     console.log("Your number is greater than 0.5!");
// }
// console.log(random);
// console.log("AFTER CONDITIONAL");

//======================================================

// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("UGH I HATE MONDAYS!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay I love Saturdays!");
// } else if (dayOfWeek === "friday") {
//     console.log("Fridays are decent, especially after work!");
// } else {
//     console.log("MEH");
// }

//===============================================

// 0 - 5 - Free
// 5 - 10 Child $10
// 10 - 65 Adult $20
// 65+ Senior $10
const age = 18;

if (age < 5) {
    console.log("You are a baby. You get in for free!");
} else if (age < 10) {
    console.log("You are a child. You pay $10!");
} else if (age < 65) {
    console.log("You are an adult. You pay $20!");
} else {
    console.log("You are a senior. You pay $10!");
}