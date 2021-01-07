// The old way
// function rollDie(numSides){
//     if (numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1
}

// Default parameters have to come after parameters that doesn't have default values
function greet(person, msg = "Hey there", punc = "!"){
    console.log( `${msg}, ${person}${punc}`)
}