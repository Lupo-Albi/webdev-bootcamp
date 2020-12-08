const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

nums.forEach(function (n) {
    console.log(n * n);
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function print(element) {
    console.log(element)
}

numbers.forEach(print);

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});