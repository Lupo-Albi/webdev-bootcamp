const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// Same Loop but using for ... of

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

// Other example with for ... of

const seatingChart = [
    [ 'Kriste', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

// The loop we made on the Nested Loops class
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`Row #${i + 1}`)

//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

// for ( let char of "hello world") {
//     console.log(char);
// }