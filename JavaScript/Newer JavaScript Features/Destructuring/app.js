// A short, clean syntax to 'unpack':
// Values from arrays
// Properties from objects intro distinct variables

// Destructuring Objects
// const scores = [929321, 899341, 888336, 772739, 543671, 245367, 111934];

// const highScore = scores[0];
// const secondHighScore = scores [1];

// const [gold, silver, bronze, ...everyoneElse] = scores;
// console.log(gold); // 929321
// console.log(silver); // 899341
// console.log(bronze); // 888336
// console.log(everyoneElse); // 772739, 543671, 245367, 111934

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [ gold, silver, bronze ] = raceResults;
console.log(gold); // 'Eliud Kipchoge'
console.log(silver); // 'Feyisa Lelisa'
console.log(bronze); // 'Galen Rupp'

const [ fastest, ...everyoneElse ] = raceResults;
fastest; // 'Eliud Kipchoge'
everyoneElse; // 'Feyisa Lelisa', 'Galen Rupp'

// Destructuring Objects
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

//  const firstName = user.firstName
//  const lastName = user.lastName;
//  const email = user.email;

// const { email, firstName, lastName, city, bio } = user;
const { born: birthYear, died: deathYear = 'N/A' } = user;

const { city, state, died = 'N/A' } = user2; //dafault values

//
// Destructuring Params

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
//
// function fullName(user) {
//     const {firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({ firstName, lastName = 'Lopes' }) {
    return `${firstName} ${lastName}`

}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Waterwold',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        year: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90);
// movies.filter(({ score }) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
movies.map(({ title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})