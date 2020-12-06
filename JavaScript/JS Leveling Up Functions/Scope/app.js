let totalEggs = 0; // global scope

function collectEggs() {
    // let totalEggs = 6; // collectEggs scope
    totalEggs = 6;
}

console.log(totalEggs);
collectEggs();
console.log(totalEggs);

//

let bird = 'Scarlet Macaw';

function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}

console.log(bird)
birdWatch()
console.log(bird)

//

const creature = "Common Sea Dragon";

function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}

scubaDive();

//

let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal);

// Block Scope

let radius = 8;
if (radius > 0) {
    const PI = 3.14159; // not avaiable outside this if block
    let msg = 'HIII!'; // not avaiable outside this if block
}

console.log(radius);
console.log(msg); // print undefined

for (let i = 0; i < 5; i++) {
    var msg = 'MESSAGE'; // avaiable outside of this for block because we used VAR
    console.log(msg);
}
console.log(msg); // print the msg value of the for block that is avaible outside of the blcok
console.log(i); // error because i is declared with let so it's not avaiable outside the for loop