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