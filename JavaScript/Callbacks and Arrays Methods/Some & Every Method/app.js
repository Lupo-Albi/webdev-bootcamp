// Every: tests wheter all elements in the array pass the provided function. It returns a boolean value

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

words.every(word => {
    return word.length === 3;
}) // true

words.every(word => word[0] === 'd'); // false

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g';
}) // true

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

const isEveryoneApproved = exams.every(score => score >= 75)

// Some: similar to EVERY, but returns true if ANY of the array elements pass the test function

const moreWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
moreWords.some(word => {
    return word.length > 4;
}) // true

// Do any words start with 'Z'?
moreWords.some(word => word[0] === 'Z'); // false

// Do any words contain 'cake'?
moreWords.some(w => w.includes('cake')); // true